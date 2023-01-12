import { useQuery } from "@apollo/client";
import { Button, Modal, Table } from "@mantine/core";
import React, { useState } from "react";
import { EditProductForm } from "../components/forms/EditProductForm";
import { GET_ALL_PRODUCTS } from "../queries";

export const Inventory = () => {
  const [opened, setOpened] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const { data: products } = useQuery(GET_ALL_PRODUCTS);
  const productRows = products?.products.map((product) => (
    <tr key={product.id} className="odd:bg-gray-900">
      <td>{product.productBrand.value}</td>
      <td>{product.productCategory.value}</td>
      <td>{product.description}</td>
      <td>{product.stock}</td>
      <td>{product.minStock}</td>
      <td>{product.buyPrice}</td>
      <td>{product.sellPrice}</td>
      <td>{product.ean}</td>
      <td>{product.productSupplier.value}</td>
      <td>{product.productGroup.value}</td>
      <td>{product.expectedDurability}</td>
      <td>
        <Button
          radius={5}
          onClick={() => {
            setOpened(true);
            setSelectedProduct(product);
          }}
        >
          Edit
        </Button>
      </td>
    </tr>
  ));
  return (
    <div>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <EditProductForm product={selectedProduct} setOpened={setOpened} />
      </Modal>

      <Table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Category</th>
            <th>Description</th>
            <th>Stock</th>
            <th>MinStock</th>
            <th>Buy Price</th>
            <th>Sell Price</th>
            <th>EAN</th>
            <th>Supplier</th>
            <th>Group</th>
            <th>Durability</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{productRows}</tbody>
      </Table>
    </div>
  );
};
