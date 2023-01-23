import { TextInput } from "@mantine/core";
import React from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_TASKS_BY_NAME } from "../../queries";

export const SearchTasks = ({setTasks}) => {
	const [search, { loading, error, data }] = useLazyQuery(GET_TASKS_BY_NAME);
  setTasks(data?.taskByName)
	return (
		<div>
			<TextInput
				onChange={(e) => {
					search({ variables: { name: e.target.value } });
				}}
			/>
		</div>
	);
};
