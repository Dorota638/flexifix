import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Card, Title, Grid } from '@mantine/core';
import { useStore } from '../../Store';

const GET_CUSTOMER = gql`
  query getCustomer($name: String!) {
    customerByName(name: $name) {
      id
      fullName
      email
    }
  }
`;





const ListCustomers = ({ name }) => {
  const { data, loading, error } = useQuery(GET_CUSTOMER, {
    variables: { name },
  });

  const customers = data?.customerByName;
  const setCustomer = useStore((state) => state.selectCustomer);
  const selectedCustomer = useStore((state) => state.selectedCustomer);


  return (
    <Grid>
      {customers?.map((customer) => (
        <Grid.Col span={6} key={customer.id}>
          <Card
            shadow="sm"
            p="lg"
            sx={{ minWidth: 400 }}
            onClick={() => { setCustomer(customer); }}
            className={` ${customer.id === selectedCustomer.id ? 'bg-primary-900' : ''}`}

          >
            <Card.Section className='p-2'>
              <Title order={1}> {customer.fullName} </Title>
              <Title order={5}> {customer.email} </Title>
            </Card.Section>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default ListCustomers;
