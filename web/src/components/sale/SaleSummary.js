import { gql, useMutation } from '@apollo/client';
import { Box, Button, Select, Table } from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import React from 'react';
import { useStore } from '../../Store';

export const SaleSummary = () => {
  const sale = useStore((store) => ({
    customer: store.selectedCustomer,
    cart: store.cart,
  }));

  const form = useForm({
    initialValues: {
      fkPaymentMethod: 0,
    },
  });

  const POST_NEW_SALE = gql`
    mutation ($fkPaymentMethod: Int!, $fkCustomerId: String!, $fkSalespersonId: Int!) {
      createSale(
        input: {
          fkPaymentMethod: $fkPaymentMethod
          fkCustomerId: $fkCustomerId
          fkSalespersonId: $fkSalespersonId
        }
      ) {
        id
      }
    }
  `;

  const ADD_INVOICE_LINES = gql`
    mutation ($fkSaleId: String, $fkProductId: String!, $amount: Int!, $price: Float!) {
      createProductInvoiceLine(
        input: { fkSaleId: $fkSaleId, fkProductId: $fkProductId, amount: $amount, price: $price }
      ) {
        id
        product {
          id
        }
        amount
        price
      }
    }
  `;

  const salesPerson = useStore((state) => state.signedIn);
  const customer = useStore((state) => state.selectedCustomer);

  const [createSale] = useMutation(POST_NEW_SALE);
  const [addInvoiceLines] = useMutation(ADD_INVOICE_LINES);

  const productRows = sale.cart.map((item) => (
    <tr key={item.product.id}>
      <td>{item.product.description}</td>
      <td>{item.product.productBrand.name}</td>
      <td>{item.product.productCategory.name}</td>
      <td>{item.product.sellPrice}</td>
      <td>{item.amount}x</td>
    </tr>
  ));
  
  const initVal = 0;
  const totalPrice = sale.cart.reduce(
    (prev, curr) => prev + curr.amount * curr.product.sellPrice,
    initVal
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
        sale.cart.map(({ amount, product }) => {
          addInvoiceLines({
            variables: {
              fkSaleId: data.createSale.id,
              fkProductId: product.id,
              price: product.sellPrice,
              amount,
            },
          }).then((data) => {
            console.log(data);
          });
        });
      })
      .catch((err) => {
        console.log('error ', err);
        showNotification({
          title: 'Ooops...',
          message: err.message,
          autoClose: 3000,
          color: 'red',
        });
      });
  };

  return (
    <>
      <Box>
        <h1>Customer:</h1>
        <p>{sale.customer.fullName || 'No customer selected'}</p>
      </Box>
      <Box className="mt-5">
        <Table>
          <thead>
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
        <h1 className="mt-5 text-lg">Sum: {totalPrice}DKK</h1>
      </Box>
      <Box className="mt-5">
        <form onSubmit={form.onSubmit((values) => postSale(values))}>
          <Select
            label="Paymnet method"
            required
            sx={{ maxWidth: 200 }}
            {...form.getInputProps('fkPaymentMethod')}
            data={[
              { value: 1, label: 'Cash' },
              { value: 2, label: 'MobilePay' },
              { value: 3, label: 'Card' },
              { value: 4, label: 'Bank Transfer' },
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
