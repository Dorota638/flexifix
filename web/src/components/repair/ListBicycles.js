import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Card, Title, Grid } from '@mantine/core';
import { useStore } from '../../Store';

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

const ListBicycles = ({ id }) => {
  const { data, loading, error } = useQuery(GET_BICYCLES, {
    variables: { customerId: id },
  });

  const bicycles = data?.bicyclesByCustomerId;
  const setBicycle = useStore((state) => state.selectBicycle);

  console.log(bicycles);
  return (
    <Grid>
      {bicycles?.map((bicycle) => (
        <Grid.Col span={6} key={bicycle.id}>
          <Card
            shadow="sm"
            p="lg"
            sx={{ minWidth: 400 }}
            onClick={() => { setBicycle(bicycle); }}
          >
            <Card.Section>
              <Title order={1}> {bicycle.brand.name} </Title>
              <Title order={5}> {bicycle.color.color} </Title>
            </Card.Section>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default ListBicycles;
