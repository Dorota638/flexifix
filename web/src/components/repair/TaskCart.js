import { NumberInput, Table } from "@mantine/core";
import React from "react";
import { useStore } from "../../Store";

export const TaskCart = ({ taskCart }) => {
  const removeTaskFromCart = useStore((state) => state.removeTaskFromCart);
  const updateTime = useStore((state) => state.updateTime);
  const selectedtasks = taskCart?.map((item) => (
    <tr
      key={item.id}
      onClick={() => {
        removeTaskFromCart(item);
      }}
      className="odd:bg-gray-900"
    >
      <td>{item?.name}</td>
      <NumberInput
        className="w-32 bg-red-400"
        defaultValue={item?.duration}
        placeholder="Duration"
        required
        min={1}
        onChange={(value) => {
          updateTime(item.id, value);
        }}
      />
    </tr>
  ));
  return (
    <Table className="mt-10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>{selectedtasks}</tbody>
    </Table>
  );
};
