import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box } from "@mantine/core";
import React, { useState } from "react";
import { ListCustomers } from "./ListCustomers.js";

export const SelectCustomer = () => {
  const form = useForm({
    initialValues: {
      name: "",
    },
  });
  const [Name, setName] = useState();
  return (
    <>
      <Box className="m-auto" sx={{ maxWidth: 400 }}>
        <h1>Search for customer</h1>
        <form
          className="mb-10"
          onSubmit={form.onSubmit((values) => setName(values.name))}
        >
          <TextInput
            autoComplete="off"
            required
            label="Name"
            {...form.getInputProps("name")}
          />
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
      <ListCustomers name={Name} />
    </>
  );
};
