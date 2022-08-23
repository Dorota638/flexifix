import { gql, useQuery } from "@apollo/client";
import React from "react";
import { SelectTasks } from "./SelectTasks";

const GET_REPAIR = gql`
  query Query($repairId: String) {
    taskInvoiceLines(repairId: $repairId) {
      id
      amount
      price
      time
      task {
        id
        taskCategory {
          id
          name
        }
        name
        duration
      }
    }
  }
`;
export const FinishRepair = ({ repairId }) => {
  const { data: taskInvoiceLines } = useQuery(GET_REPAIR, {
    variables: { repairId },
  });

  return (
    <div>
      <SelectTasks taskInvoiceLines={taskInvoiceLines}/>
    </div>
  );
};
