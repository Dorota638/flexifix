import React from 'react';
import { useQuery } from '@apollo/client';
import { Button, Grid, Table } from '@mantine/core';
import { useStore } from '../../Store';
import { GET_RENTAL_BICYCLES } from '../../queries';

export const SelectRentalBicycle = ({ selectedBicycle }) => {
  const { data: bicycles, loading } = useQuery(GET_RENTAL_BICYCLES);
  const rentalCart = useStore(({ rentalCart }) => rentalCart);
  const addRentalToCart = useStore(({ addRentalToCart }) => addRentalToCart);
  const removeRentalFromCart = useStore(({ removeRentalFromCart }) => removeRentalFromCart);
  let bicycleRows;

  if (!loading) {
    bicycleRows = bicycles.rentalBicycles.map((bicycle) => (
      <tr key={bicycle.id} className="odd:bg-gray-900">
        <td>{bicycle.name}</td>
        <td>{bicycle.brand.value}</td>
        <td>{bicycle.type}</td>
        <td>{bicycle.color.value}</td>
        {/* <td>{bicycle.gearsystem.value}</td> */}
        {/* <td>{bicycle.tires.value}</td> */}
        {/* <td>{bicycle.frameNumber}</td> */}
        {/* <td>{bicycle.status.value}</td> */}
        <td>
          <Button
            onClick={() => {
              addRentalToCart(bicycle);
            }}
          >
            Select
          </Button>
        </td>
      </tr>
    ));
  }

  const bicycleCartRows = rentalCart.map((bicycle) => (
    <tr key={bicycle.id} className="odd:bg-gray-900">
      <td>{bicycle.name}</td>
      <td>{bicycle.brand.value}</td>
      <td>{bicycle.type}</td>
      <td>{bicycle.color.value}</td>
      {/* <td>{bicycle.gearsystem.value}</td> */}
      {/* <td>{bicycle.tires.value}</td> */}
      {/* <td>{bicycle.frameNumber}</td> */}
      {/* <td>{bicycle.status.value}</td> */}
      <td>
        <Button
          onClick={() => {
            console.log(bicycle.id);
            removeRentalFromCart(bicycle.id);
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  ));

  return (
    <>
      <h1 className="text-xl pb-3">Select rental bicycle </h1>
      <Grid>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Type</th>
                <th>Color</th>
                {/* <th>Gearsystem</th> */}
                {/* <th>Tires</th> */}
                {/* <th>FrameNumber</th> */}
                {/* <th>Status</th> */}
                <th>Select</th>
              </tr>
            </thead>
            <tbody>{bicycleRows}</tbody>
          </Table>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Type</th>
                <th>Color</th>
                {/* <th>Gearsystem</th> */}
                {/* <th>Tires</th> */}
                {/* <th>FrameNumber</th> */}
                {/* <th>Status</th> */}
                <th>Select</th>
              </tr>
            </thead>
            <tbody>{bicycleCartRows}</tbody>
          </Table>
      </Grid>
    </>
  );
};
