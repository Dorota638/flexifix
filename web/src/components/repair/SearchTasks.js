import { TextInput } from "@mantine/core";
import React from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_TASKS_BY_NAME } from "../../queries";
import { useStore } from "../../Store";

export const SearchTasks = () => {
	const [search] = useLazyQuery(GET_TASKS_BY_NAME);
	const storeTasks = useStore((state) => state.storeTasks);

	return (
		<div>
			<TextInput
				onChange={(e) => {
					search({ variables: { name: e.target.value } }).then(({ data }) => {
            console.log('data.tasksByName', data.taskByName);
						storeTasks(data.taskByName);
					});
				}}
			/>
		</div>
	);
};
