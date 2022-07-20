import React from 'react';
import { Table } from '@mantine/core';
import { useStore } from '../Store';

export const ProductCart = () => {
  const removeFromCart = useStore((state) => state.removeProductFromCart);

  const cart = useStore(({ productCart }) => productCart);

  const cartRows = cart?.map((item) => (
    <tr
      key={item.product.id}
      onClick={() => {
        removeFromCart(item.product);
      }}
    >
      <td>{item?.product?.description}</td>
      <td>{item?.product?.productBrand?.name}</td>
      <td>{item?.product?.productCategory?.name}</td>
      <td>{item?.product?.sellPrice}</td>
      <td>{item?.amount}</td>
    </tr>
  ));

  return (
    <>
      <Table className='mt-10'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{cartRows}</tbody>
      </Table>
    </>
  );
};
