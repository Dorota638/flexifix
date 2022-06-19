import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Group, Card, Title } from '@mantine/core';

const GET_CUSTOMER = gql`
  query getCustomer($name: String!) {
    customerByName(name: $name) {
      id
      fullName
    }
  }
`;

const CustomerSearch = ({ name }) => {
  const { data, loading, error } = useQuery(GET_CUSTOMER, {
    variables: { name },
  });
  const customers = data?.customerByName;
  // console.log(customers);
  return (
    <Group>
      {customers?.map((customer) => (
        <Card shadow="sm" p="lg">
          <Card.Section>
            <Title order={1}> {customer.fullName} </Title>
            <Title order={5}> {customer.id} </Title>
          </Card.Section>
        </Card>
      ))}
    </Group>
  );
};

export default CustomerSearch;
