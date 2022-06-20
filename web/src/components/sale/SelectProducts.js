import { gql, useQuery } from '@apollo/client';
import { Table } from '@mantine/core';
import React from 'react';
import { useStore } from '../../Store';
const GET_PRODUCTS = gql`
  query {
    products {
      id
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

export const SelectProducts = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  const addToCart = useStore((state) => state.addToCart);

  const productRows = data?.products?.map((product) => (
    <tr key={product.id} onClick={() => { addToCart(product); }} >
      <td>{product.description}</td>
      <td>{product.productBrand.name}</td>
      <td>{product.productCategory.name}</td>
      <td>{product.sellPrice}</td>
    </tr>
  ));

  return (
    <>
    <Table>
      <thead>
        <tr>
          <th>description</th>
          <th>productBrand</th>
          <th>productCategory</th>
          <th>sellPrice</th>
        </tr>
      </thead>
      <tbody>{productRows}</tbody>
    </Table>
    
    </>
  );
};
