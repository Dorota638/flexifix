import { Table } from "@mantine/core";
import React from "react";
import { useStore } from "../../Store";
import { GET_PRODUCTS_BY_CATEGORY } from "../../queries";
import { useLazyQuery } from "@apollo/client";

export const SelectTasks = ({ tasks }) => {
	const addTaskToCart = useStore(({ addTaskToCart }) => addTaskToCart);
	const storeProducts = useStore((state) => state.storeProducts);

	const [productsByCategory] = useLazyQuery(GET_PRODUCTS_BY_CATEGORY);

	const taskList = tasks?.map((task) => {
		return (
			<tr
				key={`task${task.id}`}
				onClick={() => {
					addTaskToCart(task);
					productsByCategory({ variables: { categoryId: task.productCategoryId } }).then(
						({ data }) => {
							storeProducts(data.productsByCategory);
						}
					);
				}}
				className="odd:bg-gray-900">
				<td>{task?.name}</td>
				<td>{task?.duration}</td>
			</tr>
		);
	});

	return (
		<div className="child:mx-auto">
			{/* <Select
				className="max-w-md"
				label="Task Category"
				placeholder="Task Categoy"
				searchable
				nothingFound="¿QUE?"
				onChange={setCategoryId}
				data={category?.map((t) => ({
					value: t.id,
					label: t.name,
				}))}></Select> */}
			<Table className="mt-10 max-w-md">
				<thead>
					<tr>
						<th>Name</th>
						<th>Duration</th>
					</tr>
				</thead>
				<tbody>{taskList}</tbody>
			</Table>
		</div>
	);
};
