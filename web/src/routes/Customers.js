import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Button, Group, Modal, Table, TextInput } from '@mantine/core';
import { GET_CUSTOMER } from '../queries';
import { useForm } from '@mantine/form';
import { CustomerForm } from '../components/forms/CustomerForm';

const FilteredCustomers = ({ name }) => {
  const [opened, setOpened] = useState(false);
  const [customer, setCustomer] = useState({});

  // const { data: customers } = useQuery(GET_ALL_CUSTOMERS);
  // const [openCustomer, setOpenCustomer] = useState(true);
  const { data: customers } = useQuery(GET_CUSTOMER, {
    variables: { name },
  });

  const customerRows = customers?.customerByName.map((customer) => (
    <tr key={customer.id} className="odd:bg-gray-900">
      <td>{customer.firstName}</td>
      <td>{customer.lastName}</td>
      <td>{customer.email}</td>
      <td>{customer.phone}</td>
      <td>{customer.company}</td>
      <td>{customer.cvr}</td>
      <td>{customer.address}</td>
      <td>{customer.zipCode}</td>
      <td>{customer.city}</td>
      <td>
        <Button
          onClick={() => {
            setOpened(true);
            setCustomer(customer);
          }}
        >
          Edit
        </Button>
      </td>
    </tr>
  ));

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>CVR</th>
            <th>Address</th>
            <th>ZipCode</th>
            <th>City</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{customerRows}</tbody>
      </Table>
      <Modal size={600} opened={opened} onClose={() => setOpened(false)} title="Edit customer">
        <CustomerForm setOpened={setOpened} customer={customer} /> {//change name CustomerForm to edit customer
        }
      </Modal>
    </>
  );
};

export const Customers = () => {
  const [name, setName] = useState(null);
  const form = useForm({
    initialValues: {},
  });

  return (
    <div>
      <form onSubmit={form.onSubmit(({ name }) => setName(`${name} `))}>
        <TextInput label="Name" autoComplete="off" {...form.getInputProps('name')} />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>

      <FilteredCustomers name={name} />
    </div>
  );
};
