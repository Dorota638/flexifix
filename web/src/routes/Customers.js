import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Button, Modal, Table } from "@mantine/core";
import { CustomerForm } from "../components/forms/CustomerForm";
import { GET_ALL_CUSTOMERS } from "../queries";


export const Customers = () => {
  const { data: customers } = useQuery(GET_ALL_CUSTOMERS);
  const [opened, setOpened] = useState(false);
  const [customer, setCustomer] = useState({});
  const customerRows = customers?.customers.map((customer) => (
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
    <div>
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

      <Modal
        size="md"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create customer"
      >
        <CustomerForm setOpened={setOpened} customer={customer} />
      </Modal>
    </div>
  );
};
