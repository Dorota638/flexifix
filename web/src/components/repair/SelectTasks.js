import { Select, Table } from "@mantine/core";
import React, { useState } from "react";
import { useStore } from "../../Store";
import { SugestedProducts } from "./SugestedProducts";

export const SelectTasks = () => {
	const addTaskToCart = useStore(({ addTaskToCart }) => addTaskToCart);
	const tasksList = useStore(({ tasks }) => tasks);
	const { category } = useStore(({ taskProps }) => taskProps);
	const [categoryId, setCategoryId] = useState("");
	const [task, setTask] = useState(null);

	function filterData(filterId, data) {
		if (filterId) {
			return data.filter((d) => d.taskCategory.id === categoryId);
		}
	}

	const tasks = filterData(categoryId, tasksList)?.map((task) => {
		return (
			<tr
				key={`task${task.id}`}
				onClick={() => {
					addTaskToCart(task);
					setTask(task);
				}}
				className="odd:bg-gray-900">
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
				}))}></Select>
			<Table className="mt-10 max-w-md">
				<thead>
					<tr>
						<th>Name</th>
						<th>Duration</th>
					</tr>
				</thead>
				<tbody>{tasks}</tbody>
			</Table>
			{task ? <SugestedProducts productCategoryId={task.productCategoryId} /> : ""}
		</div>
	);
};
