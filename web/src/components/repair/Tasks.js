import React from "react";
import { SearchTasks } from "./SearchTasks";
import { SelectTasks } from "./SelectTasks";
import { TaskCart } from "./TaskCart";

export const Tasks = () => {

  return (
		<div>
			<SearchTasks  />
			<SelectTasks />
			<TaskCart />
		</div>
	);
};
