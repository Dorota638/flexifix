import React from "react";
import { Button, Group } from "@mantine/core";
import { SelectTasks } from "../repair/SelectTasks";
import { TaskCart } from "../repair/TaskCart";

export const EditRepair = ({ repairId }) => {
  return (
    <>
      <Group>
        <Button>Tasks</Button>
        <Button>Parts</Button>
      </Group>
      <SelectTasks />
      <TaskCart repairId={repairId} />
    </>
  );
};
