import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Button, Loader, Modal, Table } from "@mantine/core";
import { GET_ALL_BICYCLES } from "../queries";
import { EditBicycle } from "../components/forms/EditBicycle";

export const Bicycles = () => {
  const { data: bicycles, loading } = useQuery(GET_ALL_BICYCLES);
  const [opened, setOpened] = useState(false)
  const [bicycle, setBicycle] = useState()
  console.log('bicycles', bicycles);

  const filteredBicycles = (bicycles, filter, value) => {
    if (!filter) {
      return bicycles;
    }
    return bicycles.filter((bicycle) => bicycle[filter].id === value)
  }

  console.log('filtered',
    filteredBicycles(bicycles ? bicycles.bicycles : [], 'brand', 3
    ));

  const bicycleRows = bicycles?.bicycles.map((bicycle) => (
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
      <td><Button
        onClick={() => { setOpened(true); setBicycle(bicycle) }}
      >Edit</Button></td>
    </tr>
  ));
  if (loading) return <Loader />;

  return (
    <div>
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
      <Modal
        size={600}
        opened={opened}
        onClose={() => setOpened(false)}
        title="Edit Bicycle"
      >
        <EditBicycle setOpened={setOpened} bicycle={bicycle} />
      </Modal>
    </div>
  );
};

