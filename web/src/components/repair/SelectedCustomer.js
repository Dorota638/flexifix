import { Card, Text } from '@mantine/core';
import React from 'react';
import { useStore } from '../../Store';

export const SelectedCustomer = () => {
  const customer = useStore(({selectedCustomer}) => selectedCustomer);
  return (
    <div className="max-w-xs m-auto mt-10">
      <Text className="text-xl">Selected customer:</Text>
      <Card shadow="sm" p="lg">
        <Text>Name: {customer.fullName}</Text>
        <Text>Email: {customer.email ? customer.email : "nema email, treba zohnat"}</Text>
      </Card>
    </div>
  );
};
