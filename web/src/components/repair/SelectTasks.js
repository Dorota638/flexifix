import { Select, Table } from "@mantine/core";
import React, { useState } from "react";
import { useStore } from "../../Store";

export const SelectTasks = () => {
  const addTaskToCart = useStore(({ addTaskToCart }) => addTaskToCart);
  const tasksList = useStore(({ tasks }) => tasks);
  const { category } = useStore(({ taskProps }) => taskProps);
  const [categoryId, setCategoryId] = useState("");

  const filteredTasks = (taskId) => {
    if (taskId) {
      return tasksList.filter((task) => task.taskCategory.id === taskId);
    }
  };

  const tasks = filteredTasks(categoryId)?.map((task) => {
    return (
      <tr
        key={`task${task.id}`}
        onClick={() => {
          addTaskToCart(task);
        }}
        className="odd:bg-gray-900"
      >
        <td>{task?.name}</td>
        <td>{task?.duration}</td>
      </tr>
    );
  });

  return (
    <div className="child:mx-auto">
      <Select
        className="max-w-md"
        label="Task Category"
        placeholder="Task Categoy"
        searchable
        nothingFound="¿QUE?"
        onChange={setCategoryId}
        data={category?.map((t) => ({
          value: t.id,
          label: t.name,
        }))}
      ></Select>
      <Table className="mt-10 max-w-md">
        <thead>
          <tr>
            <th>Name</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>{tasks}</tbody>
      </Table>
    </div>
  );
};
