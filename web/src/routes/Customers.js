import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Table } from "@mantine/core";

const GET_ALL_CUSTOMERS = gql`
  query {
    customers {
      id
      firstName
      lastName
      company
      cvr
      phone
      address
      zipCode
      city
      email
    }
  }
`;

export const Customers = () => {
  const { data: customers } = useQuery(GET_ALL_CUSTOMERS);
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
          </tr>
        </thead>
        <tbody>{customerRows}</tbody>
      </Table>
    </div>
  );
};

