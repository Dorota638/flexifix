import { useQuery } from "@apollo/client";
import { Button, Modal, Table } from "@mantine/core";
import React, { useState } from "react";
import Invoice from "../components/Invoice";
import { EditRepair } from "../components/repairCard/EditRepair";
import { GET_ALL_REPAIRS } from "../queries";
const HaveInvoice = ({ status, setRepair, setOpened, repair }) => {
  if (status === "337a9aaa-8839-45a5-8eff-37bad227846c" || status === "cbf710fd-870b-4219-876b-b236693f86f2") {
    return (

      <Button
        onClick={() => {
          setOpened(true);
          setRepair(repair);
        }}
      >
        Invoice
      </Button>

    );
  }
};

export const Repairs = () => {
  const [opened, setOpened] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [repair, setRepair] = useState(null);
  const { data: repairs } = useQuery(GET_ALL_REPAIRS);
  console.log(repairs, "repairsdata");
  const repairRows = repairs?.repairs.map((repair) => (
    <tr key={repair.id} className="odd:bg-gray-900">
      <td>{repair.number}</td>
      <td>{repair.customer.fullName}</td>
      <td>{repair.bicycle.brand.value}</td>
      <td>{repair.status.value}</td>
      <td>
        <HaveInvoice
          status={repair.status.id}
          setRepair={setRepair}
          setOpened={setOpened}
          repair={repair} />
      </td>
      <td>
        <Button
          onClick={() => {
            setOpenEdit(true);
            setRepair(repair);
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
            <th>Bicycle</th>
            <th>Status</th>
            <th>Invoice</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{repairRows}</tbody>
      </Table>

      <Modal
        size="xl"
        opened={openEdit}
        onClose={() => setOpenEdit(false)}
        title="Edit Repair"
      >
        <EditRepair repair={repair} />
      </Modal>
      <Modal
        size="md"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Invoice"
      >
        <Invoice setOpened={setOpened} repair={repair} />
      </Modal>
    </div>
  );
};

