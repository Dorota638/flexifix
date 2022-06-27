import { gql, useQuery } from '@apollo/client';
import { Table } from '@mantine/core';
import React from 'react';
import { useStore } from '../../Store';
const GET_BICYCLES = gql`
  query ($customerId: String!) {
    bicyclesByCustomerId(customerId: $customerId) {
      id
      type
      name
      color {
        id
        color
      }
      brand {
        name
        id
      }
      gearsystem {
        type
        id
      }
      status {
        status
        id
      }
      tires {
        size
        id
      }
      frameNumber
      owner {
        fullName
        id
      }
      holder {
        id
        fullName
      }
    }
  }
`;

export const SelectBicycles = ({ hidden }) => {
  const { data, loading, error } = useQuery(GET_BICYCLES, {
    variables:{customerId: "c6389cef-b019-4b77-b0f7-44f68aebf155"}
  });
  const addToCart = useStore((state) => state.addToCart);
  const bicycleRows = data?.bicyclesByCustomerId.map((bicycle) => (
    <tr
      key={bicycle.id}
      onClick={() => {
        addToCart(bicycle);
      }}
    >
      <td>{bicycle.brand.name}</td>
      <td>{bicycle.type}</td>
      <td>{bicycle.gearsystem.type}</td>
      <td>{bicycle.frameNumber}</td>
    </tr>
  ));

  return (
    <>
      <Table className={`${hidden ? 'hidden' : ''}`}>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Type</th>
            <th>Gearsystem</th>
            <th>Frame Number</th>
          </tr>
        </thead>
        <tbody>{bicycleRows}</tbody>
      </Table>
    </>
  );
};
