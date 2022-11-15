import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Button, Loader, Modal, Select, Table } from '@mantine/core';
import { GET_ALL_BICYCLES } from '../queries';
import { EditBicycle } from '../components/forms/EditBicycle';
import { useForm } from '@mantine/form';
import { useStore } from '../Store';

export const Bicycles = () => {
  const { data: bicycles, loading } = useQuery(GET_ALL_BICYCLES);
  const [opened, setOpened] = useState(false);
  const [bicycle, setBicycle] = useState();
  const [bicycleBrand, setBicycleBrand] = useState('');
  const { color, tires, status, gearsystem, brand } = useStore((state) => state.bicycleProps);
  const brandname = brand.map((brand) => ({
    label: brand.value,
    value: brand.value,
  }));

  const filteredBicycles = (bicycles, filter, value) => {
    if (!value) {
      return bicycles;
    }
    return bicycles.filter((bicycle) => bicycle[filter].value === value);
  };


  const bicycleRows = filteredBicycles(
    bicycles ? bicycles.bicycles : [],
    'brand',
    bicycleBrand
  ).map((bicycle) => (
    <tr key={bicycle.id} className="odd:bg-gray-900">
      <td>{bicycle.name}</td>
      <td>{bicycle.brand.value}</td>
      <td>{bicycle.type}</td>
      <td>{bicycle.color.value}</td>
      <td>{bicycle.gearsystem.value}</td>
      <td>{bicycle.tires.value}</td>
      <td>{bicycle.status.value}</td>
      <td>{bicycle.frameNumber}</td>
      <td>{bicycle.owner.fullName}</td>
      <td>{bicycle.holder.fullName}</td>
      <td>
        <Button
          onClick={() => {
            setOpened(true);
            setBicycle(bicycle);
          }}
        >
          Edit
        </Button>
      </td>
    </tr>
  ));

  const form = useForm({
    initialValues: {},
  });

  if (loading) return <Loader />;

  return (
    <div>
      <form>
        <Select label="Brand" onChange={setBicycleBrand} data={brandname} />
      </form>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Type</th>
            <th>Color</th>
            <th>Gearsystem</th>
            <th>Tires</th>
            <th>Status</th>
            <th>FrameNumber</th>
            <th>Owner</th>
            <th>Holder</th>
          </tr>
        </thead>
        <tbody>{bicycleRows}</tbody>
      </Table>
      <Modal size={600} opened={opened} onClose={() => setOpened(false)} title="Edit Bicycle">
        <EditBicycle setOpened={setOpened} bicycle={bicycle} />
      </Modal>
    </div>
  );
};
