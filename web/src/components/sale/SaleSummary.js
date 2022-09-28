import { useMutation } from "@apollo/client";
import { Box, Button, Select, Table } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import React from "react";
import { useStore } from "../../Store";
import { POST_NEW_SALE, ADD_PRODUCT_INVOICE_LINE, ADD_BICYCLE_INVOICE_LINE, } from "../../queries";

export const SaleSummary = () => {
  const sale = useStore((store) => ({
    customer: store.selectedCustomer,
    productCart: store.productCart,
    bicycleCart: store.bicycleCart,
  }));
  const form = useForm({
    initialValues: {
      fkPaymentMethod: 0,
    },
  });

  const emptyStore = useStore((state) => state.emptyStore);
  const salesPerson = useStore((state) => state.signedIn);
  const customer = useStore((state) => state.selectedCustomer);

  const [createSale] = useMutation(POST_NEW_SALE);
  const [createProductInvoiceLines] = useMutation(ADD_PRODUCT_INVOICE_LINE);
  const [createBicycleInvoiceLines] = useMutation(ADD_BICYCLE_INVOICE_LINE);

  const productRows = sale.productCart.map((item) => (
    <tr key={item.product.id} className="odd:bg-gray-900">
      <td>{item.product.description}</td>
      <td>{item.product.productBrand.value}</td>
      <td>{item.product.productCategory.value}</td>
      <td>{item.product.sellPrice}</td>
      <td>{item.amount}x</td>
    </tr>
  ));
  const bicycleRows = sale.bicycleCart.map((bicycle) => {
    return (
      <tr key={bicycle.id} className="odd:bg-gray-900">
        <td>{bicycle.brand.value}</td>
        <td>{bicycle.type}</td>
        <td>{bicycle.gearsystem.value}</td>
        <td>{bicycle.frameNumber}</td>
      </tr>
    );
  });

  const initVal = 0;
  const totalPrice = sale.productCart.reduce(
    (prev, curr) => prev + curr.amount * curr.product.sellPrice,
    initVal +
    sale.bicycleCart.reduce((prev, curr) => prev + curr.price, initVal)
  );

  const postSale = (values) => {
    createSale({
      variables: {
        fkPaymentMethod: values.fkPaymentMethod,
        fkCustomerId: customer.id,
        fkSalespersonId: salesPerson.id,
      },
    })
      .then(({ data }) => {
        showNotification({
          title: "Success",
          message: "Sale Created",
          autoClose: 3000,
          color: "Green",
        });
        sale?.productCart?.map(({ amount, product }) => {
          createProductInvoiceLines({
            variables: {
              fkSaleId: data.createSale.id,
              fkProductId: product.id,
              price: product.sellPrice,
              amount,
            },
          }).then(() => {
            showNotification({
              title: "Success",
              message: "Product added to sale",
              autoClose: 3000,
              color: "Green",
            });
          });
        });
        if (sale?.bicycleCart.length) {
          sale?.bicycleCart.map((bicycle) => {
            createBicycleInvoiceLines({
              variables: {
                fkSaleId: data.createSale.id,
                fkBicycleId: bicycle.id,
                price: bicycle.price,
              },
            }).then(() => {
              showNotification({
                title: "Success",
                message: "Bicycle added to sale",
                autoClose: 3000,
                color: "Green",
              });
              emptyStore();
            });
          })
        }
      })
      .catch((err) => {
        console.log("error ", err);
        showNotification({
          title: "Ooops...",
          message: err.message,
          autoClose: 3000,
          color: "red",
        });
      });
  };

  return (
    <>
      <Box>
        <h1>Customer:</h1>
        <p>{sale.customer.fullName || "No customer selected"}</p>
      </Box>
      <Box className="mt-5">
        <Table>
          <thead>
            <div className="w-full ">
              <h1 className="ml-2">Products</h1>
            </div>
            <tr>
              <th>Description</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{productRows}</tbody>
        </Table>
      </Box>
      <Box className="mt-5">
        <Table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Type</th>
              <th>Gearsystem</th>
              <th>Frame Number</th>
            </tr>
          </thead>
          <tbody>{bicycleRows}</tbody>
        </Table>
        <h1 className="mt-5 text-lg">Sum: {totalPrice}DKK</h1>
      </Box>
      <Box className="mt-5">
        <form onSubmit={form.onSubmit((values) => postSale(values))}>
          <Select
            label="Paymnet method"
            required
            sx={{ maxWidth: 200 }}
            {...form.getInputProps("fkPaymentMethod")}
            data={[
              { value: 1, label: "Cash" },
              { value: 2, label: "MobilePay" },
              { value: 3, label: "Card" },
              { value: 4, label: "Bank Transfer" },
            ]}
          />
          <Button className="mt-5" type="submit">
            Submit Sale
          </Button>
        </form>
      </Box>
    </>
  );
};
// window.open("data:application/pdf," + encodeURI(pdfString));
