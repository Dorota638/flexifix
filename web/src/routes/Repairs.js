import { gql, useQuery } from "@apollo/client";
import React from "react";
import { RepairCard } from "../components/repairCard/RepairCard";

const GET_ALL_REPAIRS = gql`
  query {
    repairs {
      id
      number
      bicycle {
        id
        type
        color {
          color
        }
        brand {
          name
        }
      }
      customer {
        fullName
      }
      status {
        status
        id
      }
      takenBy {
        name
      }
      technician {
        name
      }
      taskInvoiceLines {
        id
        task {
          name
          duration
          id
          taskCategory {
            name
          }
        }
        price
        time
      }
      createdAt
    }
  }
`;

export const Repairs = () => {
  const { data: repairs } = useQuery(GET_ALL_REPAIRS);
  return (
    <div className="flex flex-wrap">
      {repairs?.repairs.map((repair) => (
        <RepairCard repair={repair} key={repair.id}/>
      ))}
    </div>
  );
};
