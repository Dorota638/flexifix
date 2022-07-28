import { gql, useQuery } from "@apollo/client";
import { Card, Grid, Title } from "@mantine/core";
import React from "react";
import { useStore } from "../../Store";

const GET_BICYCLES = gql`
  query ($customerId: String!) {
    bicyclesByCustomerId(customerId: $customerId) {
      id
      color {
        color
      }
      brand {
        name
      }
    }
  }
`;

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
              <Title order={1}> {bicycle.brand.name} </Title>
              <Title order={5}> {bicycle.color.color} </Title>
            </Card.Section>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
    </>
  );
};
