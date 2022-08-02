import React from "react";
import { Grid } from "@mantine/core";
import { RepairCard } from "../repairCard/RepairCard";
import { gql, useQuery } from "@apollo/client";

const GET_ALL_REPAIRS = gql`
  query RepairsInProgress {
    repairsInProgress {
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
    repairsToDo {
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
    repairsDone {
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

export const ToDo = () => {
  const { data } = useQuery(GET_ALL_REPAIRS);
  const { repairsInProgress, repairsDone, repairsToDo } = data || {};

  return (
    <div>
      <Grid className="flex flex-wrap justify-evenly bg-slate-200 border-solid border border-primary p-5 m-2">
        <Grid.Col span={4} lg={4} sm={12} className="border color-primary">
          TO DO
          <div className="h-96 overflow-y-scroll">
          {repairsToDo?.map((repair) => (
            <RepairCard repair={repair} key={repair.id} />
            ))}
            </div>
        </Grid.Col>
        <Grid.Col span={4} lg={4} sm={12} className="border">
          IN PROGRESS
          <div className="h-96 overflow-y-scroll">
          {repairsInProgress?.map((repair) => (
            <RepairCard repair={repair} key={repair.id} />
            ))}
            </div>
        </Grid.Col>
        <Grid.Col span={4} lg={4} sm={12} className="border">
          DONE
          <div className="h-96 overflow-y-scroll">
          {repairsDone?.map((repair) => (
            <RepairCard repair={repair} key={repair.id} />
            ))}
            </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};
