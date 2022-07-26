import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Group, Card, Title } from "@mantine/core";

const GET_CUSTOMER = gql`
  query getCustomer($name: String!) {
    customerByName(name: $name) {
      id
      fullName
    }
  }
`;

export const CustomerSearch = ({ name }) => {
  const { data } = useQuery(GET_CUSTOMER, {
    variables: { name },
  });
  const customers = data?.customerByName;
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
