import { useQuery } from "@apollo/client";
import { Button, Group, Modal, Table } from "@mantine/core";
import React, { Fragment, useState } from "react";
import Invoice from "../components/reports/Invoice";
import { EditRepair } from "../components/repairCard/EditRepair";
import { GET_ALL_REPAIRS } from "../queries";
import { PDFViewer } from "@react-pdf/renderer";
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

const CanEdit = ({ status, setOpenEdit, setRepair, repair }) => {
  if (status === "418d6f62-0e10-4869-beb6-a9177fbf5cd5" || status === "cbf710fd-870b-4219-876b-b236693f86f2") {
    return;
  } else {
    return (
      <Group position="center">

        <Button
          onClick={() => {
            setOpenEdit(true);
            setRepair(repair);
          }}
        >
          Edit
        </Button>
      </Group>
    );
  }
};

export const Repairs = () => {
  const [openInvoice, setOpenInvoice] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [repair, setRepair] = useState(null);
  const { data: repairs } = useQuery(GET_ALL_REPAIRS);
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
          setOpened={setOpenInvoice}
          repair={repair} />
      </td>
      <td>

        <CanEdit status={repair.status.id} setOpenEdit={setOpenEdit} setRepair={setRepair} repair={repair} />
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
      <PDFViewer width="1000" height="600"
        title="Invoice">
        <Invoice repair={repair} />
      </PDFViewer>

    </div>
  );
};

