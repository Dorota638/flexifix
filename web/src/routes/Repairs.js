// import { gql, useQuery } from "@apollo/client";
// import React from "react";
// import { RepairCard } from "../components/repairCard/RepairCard";
// import { GET_ALL_REPAIRS } from "../queries";

// // export const Repairs = () => {
// //   const { data: repairs } = useQuery(GET_ALL_REPAIRS);
// //   return (
// //     <div className="flex flex-wrap">
// //       {repairs?.repairs.map((repair) => (
// //         <RepairCard repair={repair} key={repair.id} />
// //       ))}
// //     </div>
// //   );
// // };


import { gql, useQuery } from "@apollo/client";
import { Button, Modal, Table } from "@mantine/core";
import React, { useState } from "react";
import Invoice from "../components/Invoice";
import { EditRepair } from "../components/repairCard/EditRepair";

const GET_ALL_REPAIRS = gql`
  query {
    repairs {
      id
      number
      customer {
        fullName
      }
      bicycle {
        brand {
          name
        }
      }
      status {
        status
        id
      }
      createdAt
    }
  }
`;

export const Repairs = () => {
  const [opened, setOpened] = useState(false);
  const [repair, setRepair] = useState({});
  const { data: repairs } = useQuery(GET_ALL_REPAIRS);
  console.log("repairsdata", repairs);
  const repairRows = repairs?.repairs.map((repair) => (
    <tr key={repair.id} className="odd:bg-gray-900">
      <td>{repair.number}</td>
      <td>{repair.customer.fullName}</td>
      <td>{repair.bicycle.brand.name}</td>
      <td>{repair.status.status}</td>
      <td>
        <Button
          onClick={() => {
            setOpened(true);
            setRepair(repair);
          }}
        >
          Invoice
        </Button>
      </td>
      <td>
        <Button
          onClick={() => {
            setOpened(true);

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
            <th>Repair number</th>
            <th>Customer</th>
            <th>Bycicle</th>
            <th>Status</th>
            <th>Invoice</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{repairRows}</tbody>
      </Table>

      <Modal
        size="md"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create repair"
      >
        <EditRepair setOpened={setOpened} customer={repair} />
      </Modal>
      <Modal
        size="md"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Invoice"
      >
        <Invoice setOpened={setOpened} />
      </Modal>
    </div>
  );
};

