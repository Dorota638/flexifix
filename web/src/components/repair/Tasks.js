import React, { useState } from "react";
import { SearchTasks } from "./SearchTasks";
import { SelectTasks } from "./SelectTasks";
import { TaskCart } from "./TaskCart";

export const Tasks = () => {
  const [tasks, setTasks] = useState([])
	return (
		<div>
			<SearchTasks setTasks={setTasks} />
			<SelectTasks tasks={tasks}/>
			<TaskCart />
		</div>
	);
};
