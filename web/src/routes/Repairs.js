import { useQuery } from "@apollo/client";
import { Button, Group, Modal, Table } from "@mantine/core";
import React, { useState } from "react";
import Invoice from "../components/reports/Invoice";
import { EditRepair } from "../components/repairCard/EditRepair";
import { GET_ALL_REPAIRS } from "../queries";
import { PDFViewer } from "@react-pdf/renderer";

const HasInvoice = ({ status, setRepair, setOpened, repair }) => {
	if (
		status === "e8f93e09-851a-4c24-adda-07867725ca81" ||
		status === "0c3abf0e-a548-445b-8323-e3f580d54a84"
	) {
		return (
			<Button
				onClick={() => {
					setOpened(true);
					setRepair(repair);
				}}>
				Invoice
			</Button>
		);
	}
};

const CanEdit = ({ status, setOpenEdit, setRepair, repair }) => {
	if (
		status === "be9e0fb7-1277-45c9-8fd1-3f5b8071f0d3" ||
		status === "7983b8b5-472d-4e07-946a-c157face13a6"
	) {
		return (
			<Group position="center">
				<Button
					onClick={() => {
						setOpenEdit(true);
						setRepair(repair);
					}}>
					Edit
				</Button>
			</Group>
		);
	} else {
		return;
	}
};

export const Repairs = () => {
	const [openInvoice, setOpenInvoice] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
	const [repair, setRepair] = useState(null);
	// const [openCustomer, setOpenCustomer] = useState(false)
	// const [customerId, setCustomerId] = useState('');

	const { data: repairs } = useQuery(GET_ALL_REPAIRS);

	console.log("repairs", repairs);

	const repairRows = repairs?.repairs.map((repair) => (
		<tr key={repair.id} className="odd:bg-gray-900">
			<td>{repair.number}</td>
			<td>{repair.customer.fullName}</td>
			<td>{repair.bicycle.brand.value}</td>
			<td>{repair.status.value}</td>
			<td>
				<HasInvoice
					status={repair.status.id}
					setRepair={setRepair}
					setOpened={setOpenInvoice}
					repair={repair}
				/>
			</td>
			<td>
				<CanEdit
					status={repair.status.id}
					setOpenEdit={setOpenEdit}
					setRepair={setRepair}
					repair={repair}
				/>
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

			<Modal size="xl" opened={openEdit} onClose={() => setOpenEdit(false)} title="Edit Repair">
				<EditRepair repair={repair} />
			</Modal>
			<PDFViewer width="1000" height="600" title="Invoice">
				<Invoice repair={repair} />
			</PDFViewer>
		</div>
	);
};
