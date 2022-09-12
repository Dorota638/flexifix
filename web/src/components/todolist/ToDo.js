import React from "react";
import { Grid } from "@mantine/core";
import { RepairCard } from "../repairCard/RepairCard";
import { useQuery } from "@apollo/client";
import { GET_TODO } from "../../queries";


export const ToDo = () => {
  const { data } = useQuery(GET_TODO);
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
