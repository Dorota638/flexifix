import { useQuery } from "@apollo/client";
import { Button, Group, Modal, NumberInput, Table } from "@mantine/core";
import React, { useState } from "react";
import { useStore } from "../../Store";
import { GET_BICYCLES } from "../../queries";

export const SelectBicycles = () => {
	const { data } = useQuery(GET_BICYCLES, {
		variables: { customerId: "c6389cef-b019-4b77-b0f7-44f68aebf155" },
	});
	const [bicyclePrice, setBicyclePrice] = useState(0);
	const [bicycle, setBicycle] = useState({});
	const [opened, setOpened] = useState(false);
	const addToCart = useStore((state) => state.addBicycleToCart);

	console.log("data?.bicyclesByCustomerId", data?.bicyclesByCustomerId);
  
	const bicycleRows = data?.bicyclesByCustomerId.map((bicycle) => (
		<tr
			key={bicycle.id}
			onClick={() => {
				setOpened(true);
				setBicycle(bicycle);
			}}
			className="odd:bg-gray-900">
			<td>{bicycle.brand.value}</td>
			<td>{bicycle.type}</td>
			<td>{bicycle.gearsystem.value}</td>
			<td>{bicycle.frameNumber}</td>
		</tr>
	));

	return (
		<>
			<Modal opened={opened} onClose={() => setOpened(false)} title="What is the price?">
				<NumberInput
					placeholder="Enter Price!"
					label="Bicycle price"
					required
					onChange={(e) => {
						setBicyclePrice(e);
					}}
				/>
				<Group position="center">
					<Button
						onClick={() => {
							addToCart(bicycle, bicyclePrice);
							setOpened(false);
						}}>
						Add bicycle to cart
					</Button>
				</Group>
			</Modal>
			<Table>
				<thead>
					<tr>
						<th>Brand</th>
						<th>Type</th>
						<th>Gearsystem</th>
						<th>Frame Number</th>
					</tr>
				</thead>
				<tbody>{bicycleRows}</tbody>
			</Table>
		</>
	);
};
