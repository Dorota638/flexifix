import { gql, useQuery } from '@apollo/client';
import {  Table } from '@mantine/core';
import React from 'react';
import { ProductCart } from './ProductCart';
import { useStore } from '../../Store';
import { GET_PRODUCTS } from "../../queries";

export const SelectProducts = ({ hidden }) => {
  const { data } = useQuery(GET_PRODUCTS);
  const addToCart = useStore((state) => state.addProductToCart);
  const productRows = data?.products?.map((product) => (
    <tr
      key={product.id}
      onClick={() => {
        addToCart(product);
      }}
      className="odd:bg-gray-900"
    >
      <td>{product.description}</td>
      <td>{product.productBrand.name}</td>
      <td>{product.productCategory.name}</td>
      <td>{product.sellPrice}</td>
    </tr>
  ));

  return (
    <div className={`${hidden ? 'hidden' : ''}`}>
      <Table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{productRows}</tbody>
      </Table>
      <ProductCart />
    </div>
  );
};
