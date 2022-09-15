import { gql, useQuery } from "@apollo/client";
import { Card, Grid, Title } from "@mantine/core";
import React from "react";
import { useStore } from "../../Store";
import { GET_BICYCLES } from "../../queries";

export const SelectBicycle = ({selectedBicycle}) => {
  const customer = useStore((state) => state.selectedCustomer);
  const setBicycle = useStore((state) => state.selectBicycle);
  
  const { data } = useQuery(GET_BICYCLES, {
    variables: { customerId: customer.id },
  });
  const bicycles = data?.bicyclesByCustomerId;
  
  return (
    <>
      <h1 className="text-xl pb-3">Select {customer.fullName}'s bicycle </h1>
      <Grid>
      {bicycles?.map((bicycle) => (
        <Grid.Col span={6} key={bicycle.id}>
          <Card
            shadow="sm"
            p="lg"
            sx={{ minWidth: 400 }}
            onClick={() => { setBicycle(bicycle); }}
            className={` ${bicycle.id === selectedBicycle?.id ? 'bg-primary-900' : ''}`}
          >
            <Card.Section className='p-2'>
              <Title order={1}> {bicycle.brand.value} </Title>
              <Title order={5}> {bicycle.color.value} </Title>
            </Card.Section>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
    </>
  );
};
