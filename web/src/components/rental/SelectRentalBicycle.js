import React from "react";
import { useQuery } from "@apollo/client";
import { Button, Card, Grid, Title } from "@mantine/core";
import { useStore } from "../../Store";
import { GET_RENTAL_BICYCLES } from "../../queries";

export const SelectRentalBicycle = ({ selectedBicycle }) => {
	const { data: bicycles, loading } = useQuery(GET_RENTAL_BICYCLES);
	const selectBicycle = useStore((state) => state.selectBicycle);

	console.log("bicycles", bicycles);

	const rentalBicycles = loading
		? null
		: bicycles.rentalBicycles.map((bicycle) => (
				<Grid.Col span={6} key={bicycle.id}>
					<Card
						shadow="sm"
						p="lg"
						sx={{ minWidth: 400 }}
						onClick={() => {
							selectBicycle(bicycle);
						}}
						className={` ${bicycle.id === selectedBicycle?.id ? "bg-primary-900" : ""}`}>
						<Card.Section className="p-2">
							<Title order={1}> {bicycle.brand.value} </Title>
							<Title order={5}> {bicycle.color.value} </Title>
						</Card.Section>
					</Card>
				</Grid.Col>
		  ));

	return (
		<>
			<h1 className="text-xl pb-3">Select rental bicycle </h1>
			<Grid>{loading ? "" : rentalBicycles}</Grid>
		</>
	);
};
