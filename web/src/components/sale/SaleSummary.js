import { Box, Table } from '@mantine/core';
import React from 'react';
import { useStore } from '../../Store';

export const SaleSummary = () => {
  const sale = useStore((store) => ({
    customer: store.selectedCustomer,
    cart: store.cart,
  }));

  const productRows = sale.cart.map((item) => (
    <tr key={item.product.id}>
      <td>{item.product.description}</td>
      <td>{item.product.productBrand.name}</td>
      <td>{item.product.productCategory.name}</td>
      <td>{item.product.sellPrice}</td>
      <td>{item.amount}</td>
    </tr>
  ));
  const initVal = 0;
  const totalPrice = sale.cart.reduce(
    (prev, curr) => prev + curr.amount * curr.product.sellPrice,
    initVal
  );
  return (
    <>
      <Box>
        <h1>Customer:</h1>
        <p>{sale.customer.fullName}</p>
      </Box>
      <Box>
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
        <h1>Sum: {totalPrice}dkk</h1>
      </Box>
    </>
  );
};
