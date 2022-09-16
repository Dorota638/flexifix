import React from 'react';
import { Button, Table } from '@mantine/core';
import { useStore } from '../../Store';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_PRODUCT_INVOICE_LINE, GET_PRODUCT_INVOICE_LINES } from '../../queries';

export const ProductCart = ({ repairId }) => {
  const removeProductFromCart = useStore((state) => state.removeProductFromCart);
  const productCart = useStore(({ productCart }) => productCart);
  const [deleteProductInvoiceLine] = useMutation(DELETE_PRODUCT_INVOICE_LINE, {
    refetchQueries: [
      { query: GET_PRODUCT_INVOICE_LINES, variables: { repairId } },
    ],
  });

  const { data } = useQuery(GET_PRODUCT_INVOICE_LINES, {
    variables: { repairId },
  });

  const selectedProducts = productCart?.map((item) => (
    <tr
      key={item.product.id} className="odd:bg-gray-900">
      <td>{item?.product?.description}</td>
      <td>{item?.product?.productBrand?.value}</td>
      <td>{item?.product?.productCategory?.value}</td>
      <td>{item?.product?.sellPrice}</td>
      <td>{item?.amount}</td>
      <td className="hover:cursor-pointer">
        <Button
          onClick={() => {
            removeProductFromCart(item.product);
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  ));

  const savedProducts = (data?.productInvoiceLines ?? []).map((item) => {
    return (
      <tr key={item.id} className="odd:bg-gray-900">
        <td>{item?.product?.description}</td>
        <td>{item?.product?.productBrand?.value}</td>
        <td>{item?.product?.productCategory?.value}</td>
        <td>{item?.product?.sellPrice}</td>
        <td>{item?.amount}</td>
        <td className="hover:cursor-pointer">
          <Button
            onClick={() => {
              deleteProductInvoiceLine({
                variables: {
                  id: item?.id,
                },
              });
            }}
          >
            Delete
          </Button>
        </td>
      </tr>
    )
  });

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
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{selectedProducts}</tbody>
        <tbody>{savedProducts}</tbody>
      </Table>
    </>
  );
};
