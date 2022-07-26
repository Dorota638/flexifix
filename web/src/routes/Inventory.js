import { gql, useQuery } from "@apollo/client";
import { Button, Modal, Table } from "@mantine/core";
import React, { useState } from "react";
import { EditProductForm } from "../components/forms/EditProductForm";

const GET_ALL_PRODUCTS = gql`
  query {
    products {
      id
      productSupplier {
        name
        id
      }
      productBrand {
        name
        id
      }
      productCategory {
        name
        id
      }
      productGroup {
        name
        id
      }
      description
      ean
      stock
      minStock
      buyPrice
      sellPrice
      expectedDurability
    }
  }
`;

export const Inventory = () => {
  const [opened, setOpened] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const { data: products } = useQuery(GET_ALL_PRODUCTS);
  const productRows = products?.products.map((product) => (
    <tr key={product.id} className="odd:bg-gray-900">
      <td>{product.productBrand.name}</td>
      <td>{product.productCategory.name}</td>
      <td>{product.description}</td>
      <td>{product.stock}</td>
      <td>{product.minStock}</td>
      <td>{product.buyPrice}</td>
      <td>{product.sellPrice}</td>
      <td>{product.ean}</td>
      <td>{product.productSupplier.name}</td>
      <td>{product.productGroup.name}</td>
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
        <EditProductForm product={selectedProduct} setOpened={setOpened}/>
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
