import { Select, Table } from "@mantine/core";
import React, { useState } from "react";
import { useStore } from "../../Store";

export const SelectTasks = () => {
  const addTaskToCart = useStore(({ addTaskToCart }) => addTaskToCart);
  const tasksList = useStore(({ tasks }) => tasks);
  const [categoryId, setCategoryId] = useState("");
  console.log(tasksList);

  const filteredTasks = (taskId) => {
    if (taskId) {
      return tasksList.filter((task) => task.taskCategory.id === taskId);
    }
  };

  const tasks = filteredTasks(categoryId)?.map((task) => (
    <tr
      key={task.id}
      onClick={() => {
        addTaskToCart(task);
      }}
      className="odd:bg-gray-900"
    >
      <td>{task?.name}</td>
      <td>{task?.duration}</td>
    </tr>
  ));

  return (
    <div className="child:mx-auto">
      <Select
      className="max-w-md"
        label="Task Category"
        placeholder="Task Categoy"
        searchable
        nothingFound="¿QUE?"
        onChange={setCategoryId}
        data={tasksList.map((t) => ({
          value: t.taskCategory.id,
          label: t.taskCategory.name,
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
