import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Table } from "@mantine/core";
import { GET_ALL_BICYCLES } from "../queries";


export const Bicycles = () => {
  const { data: bicycles } = useQuery(GET_ALL_BICYCLES);
  const bicycleRows = bicycles?.bicycles.map((bicycle) => (
    <tr key={bicycle.id} className="odd:bg-gray-900">
      <td>{bicycle.name}</td>
      <td>{bicycle.brand.name}</td>
      <td>{bicycle.type}</td>
      <td>{bicycle.color.color}</td>
      <td>{bicycle.gearsystem.type}</td>
      <td>{bicycle.tires.size}</td>
      <td>{bicycle.status.status}</td>
      <td>{bicycle.frameNumber}</td>
      <td>{bicycle.owner.fullName}</td>
      <td>{bicycle.holder.fullName}</td>
    </tr>
  ));
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
    </div>
  );
};

