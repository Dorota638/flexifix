import React from 'react';
import { Table } from '@mantine/core';
import { useStore } from '../../Store';

export const Cart = () => {
  const cartItems = useStore(({ cart }) => cart);
  const removeFromCart = useStore((state) => state.removeFromCart);


  const cartRows = cartItems?.map((item) => (
    <tr
      key={item.product.id}
      onClick={() => {
        removeFromCart(item.product);
      }}
    >
      <td>{item.product.description}</td>
      <td>{item.product.productBrand.name}</td>
      <td>{item.product.productCategory.name}</td>
      <td>{item.product.sellPrice}</td>
      <td>{item.amount}</td>
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
            <th>amount</th>
          </tr>
        </thead>
        <tbody>{cartRows}</tbody>
      </Table>
    </>
  );
};
