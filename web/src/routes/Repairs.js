import { gql, useQuery } from "@apollo/client";
import React from "react";
import { RepairCard } from "../components/repairCard/RepairCard";
import { GET_ALL_REPAIRS } from "../queries";

export const Repairs = () => {
  const { data: repairs } = useQuery(GET_ALL_REPAIRS);
  return (
    <div className="flex flex-wrap">
      {repairs?.repairs.map((repair) => (
        <RepairCard repair={repair} key={repair.id} />
      ))}
    </div>
  );
};
