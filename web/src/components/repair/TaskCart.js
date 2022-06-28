import { Table } from '@mantine/core';
import React from 'react'
import { useStore } from '../../Store';

function TaskCart() {
  const removeFromCart = useStore((state) => state.removeFromCart);
  const cart = useStore(({ cart }) => cart);

  const selectedtasks = cart?.map((item) => (
    <tr
      key={item.product.id}
      onClick={() => {
        removeFromCart(item.product);
      }}
    >
      <td>{item?.product?.name}</td>
    </tr>
  ));
  return (
    <Table className='mt-10'>
      <thead>
        <tr>
          <th>selected tasks</th>
        </tr>
      </thead>
      <tbody>{selectedtasks}</tbody>
    </Table>
  )
}

export default TaskCart