import { gql, useQuery } from "@apollo/client";
import { Button, Group } from "@mantine/core";
import React from "react";
import { SelectTasks } from "../repair/SelectTasks";
import { TaskCart } from "../repair/TaskCart";

const GET_TASK_INVOICE_LINES = gql`
  query Query($repairId: String) {
    taskInvoiceLines(repairId: $repairId) {
      id
      task {
        id
        name
        taskCategory {
          name
          id
        }
        duration
      }
      fkRepairId
      amount
      time
      price
    }
  }
`;

export const EditRepair = ({ repairId }) => {
  const { data } = useQuery(GET_TASK_INVOICE_LINES, {
    variables: { repairId },
  });

  console.log('data?.taskInvoiceLines', ...data?.taskInvoiceLines);
  return (
    <>
      <Group>
        <Button>Tasks</Button>
        <Button>Parts</Button>
      </Group>
      <SelectTasks />
      <TaskCart tasks={data?.taskInvoiceLines}/>
    </>
  );
};
