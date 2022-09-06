import React from "react";
import { Button, Group } from "@mantine/core";
import { SelectTasks } from "../repair/SelectTasks";
import { TaskCart } from "../repair/TaskCart";
import { gql, useMutation } from "@apollo/client";
import { useStore } from "../../Store";
import { showNotification } from "@mantine/notifications";
import { POST_TASKS, GET_TASK_INVOICE_LINES } from "../../queries";

const SubmitTasks = ({ tasks, submitTasks }) => {
  if (tasks.length > 0) {
    return <Button onClick={() => submitTasks()}>Submit tasks</Button>;
  }
};

export const EditRepair = ({ repairId }) => {
  const [createTaskInvoiceLine] = useMutation(POST_TASKS, {
    refetchQueries: [{ query: GET_TASK_INVOICE_LINES, variables: { repairId }  }],
  });
  const tasks = useStore((state) => state.taskCart);
  const emptyStore = useStore((state) => state.emptyStore);

  const submitTasks = () => {
    tasks?.map((task) => {
      createTaskInvoiceLine({
        variables: {
          fkRepairId: repairId,
          fkTask: task.id,
          amount: 1,
          time: task.duration,
          price: 123,
        },
      }).then(() => {
        showNotification({
          title: "Success",
          message: "Task added to repair",
          autoClose: 3000,
          color: "Green",
        });
        emptyStore();
      });
    });
  };
  return (
    <>
      <Group>
        <Button>Tasks</Button>
        <Button>Parts</Button>
      </Group>
      <SelectTasks />
      <TaskCart repairId={repairId} />
      <SubmitTasks tasks={tasks} submitTasks={submitTasks} />
    </>
  );
};
