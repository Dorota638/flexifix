import { gql, useMutation, useQuery } from '@apollo/client';
import { Box, Button, Group, PasswordInput, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import React from 'react';
import { useStore } from '../../Store';

export const SignInForm = ({ setOpen }) => {
  const form = useForm({
    initialValues: {
      name: '',
      password: '',
    },
  });

  const LOGIN = gql`
    mutation ($id: Int!, $password: String!) {
      comparePassword(
        id: $id,
        password: $password
        ) {
        error
        employee {
          id
          name
          role
        }
      }
    }
  `;

  const GET_EMPLOYEES = gql`
    query {
      employees {
        id
        name
      }
    }
  `;

  const [logIn] = useMutation(LOGIN);
  const { data, loading } = useQuery(GET_EMPLOYEES);
  const setEmployee = useStore((state) => state.signIn);
  const employees = data?.employees ?? [];
  const employeesNames = data?.employees.map((employee) => employee.name) ?? [];

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => {
          return logIn({
            variables: {
              id: employees.find((employee) => employee.name === values.name).id, // id z mena
              password: values.password,
            },
          })
            .then(({data}) => {
              setEmployee(data.comparePassword.employee);
              setOpen(false);
            })
            .catch((err) => {
              showNotification({
                title: 'Ooops...',
                message: err.message,
                autoClose: 3000,
                color: 'red',
              });
            });
        })}
      >
        <Select
          label="Who are you?"
          placeholder="Hmm?"
          {...form.getInputProps('name')}
          data={employeesNames}
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
  );
};
