import React from 'react';
import { NumberInput, Table } from '@mantine/core';
import { useStore } from '../Store';

export const BicycleCart = () => {
  const removeFromCart = useStore((state) => state.removeBicycleFromCart);

  const cart = useStore(({ bicycleCart }) => bicycleCart);

  const cartRows = cart?.map((bicycle) => (
    <tr
      key={bicycle.id}
      onClick={() => {
        removeFromCart(bicycle);
      }}
    >
      <td>{bicycle.brand.name}</td>
      <td>{bicycle.type}</td>
      <td>{bicycle.gearsystem.type}</td>
      <td>{bicycle.frameNumber}</td>
      <td>{bicycle.price}</td>

    </tr>
  ));

  return (
    <>
      <Table className="mt-10">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Type</th>
            <th>Gearsystem</th>
            <th>Frame Number</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{cartRows}</tbody>
      </Table>
    </>
  );
};
