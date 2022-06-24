import { gql, useQuery } from '@apollo/client';
import { Box, Button, Group, Modal, PasswordInput, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import React, { useState } from 'react';
import { useStore } from '../Store';

const GET_EMPLOYEES = gql`
  query {
    employees {
      id
      name
    }
  }
`;

const LOGIN = gql`
  query Query($name: String!, $password: String!) {
  comparePassword(name: $name, password: $password) {
    employee {
      name
    }
    error
  }
}
`;

export const SignedIn = () => {
  const signedIn = useStore(({ signedIn }) => signedIn);
  const [open, setOpen] = useState(false);

  const { data, loading } = useQuery(GET_EMPLOYEES);
  const { data2, loading2 } = useQuery(LOGIN);

  console.log('data2', data2);

  const signIn = () => {
    if (signedIn.name) {
      console.log(signedIn.name);
    } else {
      console.log('ajajanj');
      setOpen(true);
    }
  };

  const form = useForm({
    initialValues: {
      name: '',
      password: '',
    },
  });
  console.log("data", data);
  // let employees = []
  // const employees = data?.employees.map((employee) => employee.name);
  const employees = ["peter", "ivanS"]
  // console.log('form', form);
  console.log("employees", employees);

  return (
    <div className="text-white text-xl mr-10">
      <Button onClick={() => signIn()}>{signedIn?.name ? signedIn.name : 'Sign In'}</Button>
      <Modal opened={open} onClose={() => setOpen(false)} title="Sign In">
        <Box sx={{ maxWidth: 300 }} mx="auto">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Select
              label="Who are you?"
              placeholder="Hmm?"
              {...form.getInputProps('name')}
              data={employees}
            />
            <PasswordInput
              className="mt-3"
              placeholder="Password"
              label="Password"
              {...form.getInputProps('password')}
              required
            />
            <Group className="mt-5 mb-2">
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </Group>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
