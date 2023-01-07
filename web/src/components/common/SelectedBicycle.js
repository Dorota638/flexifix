import { Card, Text } from '@mantine/core';
import React from 'react';
export const SelectedBicycle = ({ bicycle }) => {
  console.log(bicycle);
  return (
    <div className="max-w-xs m-auto mt-10">
      <Text className="text-xl">Selected bicycle:</Text>
      <Card shadow="sm" p="lg">
        {bicycle ?
          <>
            <Text>Brand: {bicycle.brand.value}</Text>
            <Text>Type: {bicycle.type}</Text>
            <Text>Color: {bicycle.color.value}</Text>
          </>
          : <Text>Select</Text>
        }
      </Card>
    </div>
  );
};
