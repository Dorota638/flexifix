import { gql, useQuery } from '@apollo/client';
import { Button, Group, Modal, NumberInput, Table } from '@mantine/core';
import React, { useState } from 'react';
import { BicycleCart } from '../BicycleCart';

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
    variables: { customerId: 'c6389cef-b019-4b77-b0f7-44f68aebf155' },
  });
  const [bicyclePrice, setBicyclePrice] = useState(0);
  const [bicycle, setBicycle] = useState({});
  const [opened, setOpened] = useState(false);
  const addToCart = useStore((state) => state.addBicycleToCart);
  const bicycleRows = data?.bicyclesByCustomerId.map((bicycle) => (
    <tr
      key={bicycle.id}
      onClick={() => {
        setOpened(true);
        setBicycle(bicycle);
      }}
    >
      <td>{bicycle.brand.name}</td>
      <td>{bicycle.type}</td>
      <td>{bicycle.gearsystem.type}</td>
      <td>{bicycle.frameNumber}</td>
    </tr>
  ));

  return (
    <div className={`${hidden ? 'hidden' : ''}`}>
      <>
        <Modal opened={opened} onClose={() => setOpened(false)} title="What is the price?">
          <NumberInput
            placeholder="Enter Price!"
            label="Bicycle price"
            required
            onChange={(e) => {
              setBicyclePrice(e);
            }}
          />
          <Group position="center">
            <Button
              onClick={() => {
                addToCart(bicycle, bicyclePrice);
                setOpened(false);
              }}
            >
              Add bicycle to cart
            </Button>
          </Group>
        </Modal>
      </>
      <Table>
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
      <BicycleCart />
    </div>
  );
};
