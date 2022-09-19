import { Select, Table } from "@mantine/core";
import React, { useState } from "react";
import { useStore } from "../../Store";

export const SelectProducts = () => {
  const addProductToCart = useStore(({ addProductToCart }) => addProductToCart);
  const productList = useStore(({ products }) => products);
  const { category } = useStore(({ productProps }) => productProps);
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
        <td>{product?.productBrand.value}</td>
        <td>{product?.productCategory.value}</td>
        <td>{product?.description}</td>
        <td>{product?.sellPrice}</td>
      </tr>
    );
  });
  console.log(products, "products");
  return (
    <div className="child:mx-auto">
      <Select
        className="max-w-md"
        label="Product Category"
        placeholder="Product Categoy"
        searchable
        nothingFound="¿QUE?"
        onChange={setCategoryId}
        data={category?.map((t) => ({
          value: t.id,
          label: t.value,
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
