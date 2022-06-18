import { useForm } from '@mantine/form';
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import React, { useState } from 'react';
import CustomerSearch from './CustomerSearch';

const SelectCustomer = () => {
  const form = useForm({
    initialValues: {},
  });
  const [Name, setName] = useState();
  return (
    <>
      <Box sx={{ maxWidth: 400 }} mx="auto">
        <h1>Select Customer</h1>
        <form onSubmit={form.onSubmit((values) => setName(values.name))}>
          <TextInput required label="Name" {...form.getInputProps('name')} />
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
        <CustomerSearch name={Name} />
      </Box>
    </>
  );
};

export default SelectCustomer;
