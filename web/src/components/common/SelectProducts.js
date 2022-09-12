import { Select, Table } from "@mantine/core";
import React, { useState } from "react";
import { useStore } from "../../Store";

export const SelectProducts = () => {
  const addProductToCart = useStore(({ addProductToCart }) => addProductToCart);
  const productList = useStore(({ products }) => products);
  const [categoryId, setCategoryId] = useState("");
  
  const filteredProducts = (productId) => {
    if (productId) {
      return productList.filter((product) => product.productCategory.id === productId);
    }
  };

  const products = filteredProducts(categoryId)?.map((product) => {
    return (
      <tr
        key={`prod${product.id}`}
        onClick={() => {
          addProductToCart(product);
        }}
        className="odd:bg-gray-900"
      >
        <td>{product?.productBrand.name}</td>
        <td>{product?.productCategory.name}</td>
        <td>{product?.description}</td>
        <td>{product?.sellPrice}</td>
      </tr>
    );
  });

  return (
    <div className="child:mx-auto">
      <Select
        className="max-w-md"
        label="Product Category"
        placeholder="Product Categoy"
        searchable
        nothingFound="¿QUE?"
        onChange={setCategoryId}
        data={productList?.map((t) => ({
          value: t.productCategory.id,
          label: t.productCategory.name,
        }))}
      ></Select>
      <Table className="mt-10 max-w-md">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{products}</tbody>
      </Table>
    </div>
  );
};
