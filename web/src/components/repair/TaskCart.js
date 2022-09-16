import { useMutation, useQuery } from "@apollo/client";
import { Button, NumberInput, Table } from "@mantine/core";
import React from "react";
import { useStore } from "../../Store";
import { GET_TASK_INVOICE_LINES, DELETE_TASK_INVOICE_LINE } from "../../queries";

export const TaskCart = ({ repairId }) => {
  const removeTaskFromCart = useStore((state) => state.removeTaskFromCart);
  const updateTime = useStore((state) => state.updateTime);
  const taskCart = useStore(({ taskCart }) => taskCart);
  const [deleteTaskInvoiceLine] = useMutation(DELETE_TASK_INVOICE_LINE, {
    refetchQueries: [
      { query: GET_TASK_INVOICE_LINES, variables: { repairId } },
    ],
  });
  const { data } = useQuery(GET_TASK_INVOICE_LINES, {
    variables: { repairId },
  });

  const selectedTasks = taskCart.map((item) => (
    <tr key={item.id} className="odd:bg-gray-900">
      <td>{item?.name}</td>
      <td>
        <NumberInput
          className="w-32 bg-red-400"
          defaultValue={item?.duration}
          placeholder="Duration"
          required
          min={0}
          onChange={(value) => {
            updateTime(item.id, value);
          }}
        />
      </td>
      <td>
        <Button
          onClick={() => {
            removeTaskFromCart(item);
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  ));
  const savedTasks = (data?.taskInvoiceLines ?? []).map((item) => {
    return (
      <tr key={item.id} className="odd:bg-gray-900">
        <td>{item?.task.name}</td>
        <td>{item?.time}</td>
        <td className="hover:cursor-pointer">
          <Button
            onClick={() => {
              deleteTaskInvoiceLine({
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
    <Table className="mt-10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Duration</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{selectedTasks}</tbody>
      <tbody>{savedTasks}</tbody>
    </Table>
  );
};
