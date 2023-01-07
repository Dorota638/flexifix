import React, { useState } from "react";
import { Box, Title } from "@mantine/core";
import { NewBicycleForm } from "../components/forms/NewBicycleForm";

export const NewBicycle = () => {
	const [openBicycle, setOpenBicycle] = useState(false);
	return (
		<>
			<Box className="ml-20">
				<Title order={3}>Create new bicycle</Title>
				<NewBicycleForm openBicycle={openBicycle} setOpenBicycle={setOpenBicycle} />
			</Box>
		</>
	);
};
