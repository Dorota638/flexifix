import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box } from '@mantine/core';
import { useStore } from '../../Store';
import ListBicycles from './ListBicycles.js';


export const SelectBicycle = () => {
  const form = useForm({
    initialValues: {
      bicycle: '',
    },
  });

  const customer = useStore((state) => state.selectedCustomer);

  return (
    <>
      <Box className="m-auto" sx={{ maxWidth: 400 }}>
        <h1>Select {customer.fullName}s bicycle </h1>
      </Box>
      <ListBicycles id={customer.id} />
    </>)
}  
