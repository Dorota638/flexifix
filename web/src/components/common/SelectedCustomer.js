import { Card, Text } from '@mantine/core';
import React from 'react';
export const SelectedCustomer = ({customer}) => {
  return (
    <div className="max-w-xs m-auto mt-10">
      <Text className="text-xl">Selected customer:</Text>
      <Card shadow="sm" p="lg">
        {customer ? 
        <>
        <Text>Name: {customer.fullName}</Text>
        <Text>Email: {customer.email ? customer.email : "nema email, treba zohnat"}</Text>
        </>
      : <Text>Select</Text> 
      }
      </Card>
    </div>
  );
};
