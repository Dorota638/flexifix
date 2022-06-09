import React from 'react';
import { AllCustomers } from '../AllCustomers';
import { Grid } from '@mantine/core';

export const ToDo = () => {
  return (
    <div>
      <Grid grow className="flex flex-wrap justify-evenly bg-slate-200 border-solid border border-primary p-5 m-2">
        <Grid.Col span={4} sm={1} md={3} className="border color-primary">TO DO</Grid.Col>
        <Grid.Col span={4} sm={1} md={3} className="border">IN PROGRESS</Grid.Col>
        <Grid.Col span={4} sm={1} md={3} className="border">DONE</Grid.Col>
      </Grid>
      {/* <AllCustomers /> */}
    </div>
  );
};
