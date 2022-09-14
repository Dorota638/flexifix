import { useQuery } from "@apollo/client";
import { Button, Modal, Table } from "@mantine/core";
import React, { useState } from "react";
import Invoice from "../components/Invoice";
import { EditRepair } from "../components/repairCard/EditRepair";
import { GET_ALL_REPAIRS } from "../queries";

const HaveInvoice = ({ status, setRepair, setOpened, repair }) => {
  if (status === 4 || status === 5 || status === 6) {
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
  const [repair, setRepair] = useState({});
  const { data: repairs } = useQuery(GET_ALL_REPAIRS);
  console.log("repairsdata", repairs);
  // console.log("repair", repair);
  const repairRows = repairs?.repairs.map((repair) => (
    <tr key={repair.id} className="odd:bg-gray-900">
      <td>{repair.number}</td>
      <td>{repair.customer.fullName}</td>
      <td>{repair.bicycle.brand.name}</td>
      <td>{repair.status.status}</td>
      <td>
        <HaveInvoice status={repair.status.id} setRepair={setRepair} setOpened={setOpened} repair={repair} />
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
            <th>Bicycle</th>
            <th>Status</th>
            <th>Invoice</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{repairRows}</tbody>
      </Table>

      <Modal
        size="md"
        opened={openEdit}
        onClose={() => setOpenEdit(false)}
        title="Edit Repair"
      >
        <EditRepair />
      </Modal>
      {/* <Modal
        size="md"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Invoice"
      >
<<<<<<< Updated upstream
        <Invoice setOpened={setOpened} repair={repair} />
      </Modal>
=======
        <Invoice setOpened={setOpened} repair={repairs} />
      </Modal> */}
>>>>>>> Stashed changes
    </div>
  );
};

