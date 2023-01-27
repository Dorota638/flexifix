import React from "react";
import { Table } from "@mantine/core";
import { useStore } from "../../Store";

export const BicycleCart = () => {
	const removeFromCart = useStore((state) => state.removeBicycleFromCart);

	const cart = useStore(({ bicycleCart }) => bicycleCart);

	const cartRows = cart?.map((bicycle) => (
		<tr
			key={bicycle.id}
			onClick={() => {
				removeFromCart(bicycle);
			}}
			className="odd:bg-gray-900">
			<td>{bicycle.brand.value}</td>
			<td>{bicycle.type}</td>
			<td>{bicycle.gearsystem.value}</td>
			<td>{bicycle.frameNumber}</td>
			<td>{bicycle.price}</td>
		</tr>
	));

	return (
		<>
			<h1>bicycleCart</h1>
			<Table className="mt-10">
				<thead>
					<tr>
						<th>Brand</th>
						<th>Type</th>
						<th>Gearsystem</th>
						<th>Frame Number</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{cartRows}</tbody>
			</Table>
		</>
	);
};
