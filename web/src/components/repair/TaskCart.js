import { Table } from "@mantine/core";
import React from "react";
import { useStore } from "../../Store";

export const TaskCart = ({taskCart}) => {
  const removeTaskFromCart = useStore((state) => state.removeTaskFromCart);

  const selectedtasks = taskCart?.map((item) => (
    <tr
      key={item.id}
      onClick={() => {
        removeTaskFromCart(item);
      }}
      className="odd:bg-gray-900"
    >
      <td>{item?.name}</td>
      <td>{item?.duration}</td>
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
