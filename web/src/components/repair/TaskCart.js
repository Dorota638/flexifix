<<<<<<< HEAD
import { gql, useMutation, useQuery } from "@apollo/client";
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

  const selectedtasks = taskCart.map((item) => (
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
  const savedTasks = (data?.taskInvoiceLines ?? []).map((item) => (
    <tr key={item.id} className="odd:bg-gray-900">
      <td>{item?.task.name}</td>
      <td>{item?.task.duration}</td>
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
  ));
  return (
    <Table className="mt-10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Duration</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{selectedtasks}</tbody>
      <tbody>{savedTasks}</tbody>
    </Table>
  );
};
=======
import { gql, useMutation, useQuery } from "@apollo/client";
import { Button, NumberInput, Table } from "@mantine/core";
import React from "react";
import { useStore } from "../../Store";

const GET_TASK_INVOICE_LINES = gql`
  query Query($repairId: String) {
    taskInvoiceLines(repairId: $repairId) {
      id
      task {
        id
        name
        taskCategory {
          name
          id
        }
        duration
      }
      fkRepairId
      amount
      time
      price
    }
  }
`;
const DELETE_TASK_INVOICE_LINE = gql`
  mutation ($id: String!) {
    deleteTaskInvoiceLine(id: $id) {
      deleted
    }
  }
`;

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

  console.log("data", data);

  const selectedtasks = taskCart.map((item) => (
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
  const savedTasks = (data?.taskInvoiceLines ?? []).map((item) => (
    <tr key={item.id} className="odd:bg-gray-900">
      <td>{item?.task.name}</td>
      <td>{item?.task.duration}</td>
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
  ));
  return (
    <Table className="mt-10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Duration</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{selectedtasks}</tbody>
      <tbody>{savedTasks}</tbody>
    </Table>
  );
};
>>>>>>> 1641314a754cd65714ed5ba8fd96abcebbb16476
