import React from 'react';
import { Grid } from '@mantine/core';
import RepairCard from '../repairCard/RepairCard';

export const ToDo = () => {
  return (
    <div>
      <Grid className="flex flex-wrap justify-evenly bg-slate-200 border-solid border border-primary p-5 m-2">
        <Grid.Col span={4} lg={4} sm={12} className="border color-primary">TO DO
          <RepairCard />
          <RepairCard />
          <RepairCard />
        </Grid.Col>
        <Grid.Col span={4} lg={4} sm={12} className="border">IN PROGRESS
          <RepairCard />
        </Grid.Col>
        <Grid.Col span={4} lg={4} sm={12} className="border">DONE
          <RepairCard />
        </Grid.Col>
      </Grid>
    </div>
  );
};
