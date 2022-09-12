import { gql, useQuery } from "@apollo/client";
import React from "react";
import { SelectTasks } from "./SelectTasks";
import { GET_REPAIR } from "../../queries";

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
