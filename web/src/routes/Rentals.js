import { useMutation, useQuery } from "@apollo/client";
import { Button, Modal, Table, Title } from "@mantine/core";
import React, { useState } from "react";
import { EDIT_BICYCLE, GET_ALL_RENTALS, RETURN_RENTAL } from "../queries";

const Invoice = ({ setRental, setOpenInvoice, rental }) => (
	<Button
		onClick={() => {
			setOpenInvoice(true);
			setRental(rental);
		}}>
		Invoice
	</Button>
);
export const Rentals = () => {
	const [openInvoice, setOpenInvoice] = useState(false);
	const [openRental, setOpenRental] = useState(false);
	const [rental, setRental] = useState();
	const { data: rentals } = useQuery(GET_ALL_RENTALS);
	const [returnRental] = useMutation(RETURN_RENTAL);
	const [editBicycle] = useMutation(EDIT_BICYCLE);
	const finishRental = (id) => {
		returnRental({ variables: { rentalId: id } }).then(({ data }) => {
			editBicycle({
				variables: {
					id: data.returnRental.bicycle.id,
					status: "9cec8e14-584d-4832-a6c7-1e26b927d782",
					holder: "c6389cef-b019-4b77-b0f7-44f68aebf155",
				},
			});
		});
	};
	let activeRentalRows = rentals?.rentals.filter((rental) => rental.returned === null) || [];
	let returnedRentalRows = rentals?.rentals.filter((rental) => rental.returned) || [];
	activeRentalRows = activeRentalRows.map((rental) => (
		<tr key={rental.id} className="odd:bg-gray-900">
			<td>{rental.number}</td> <td>{rental.customer.fullName}</td>
			<td>{new Date(parseInt(rental.periodStart)).toDateString()}</td>
			<td>{new Date(parseInt(rental.periodEnd)).toDateString()}</td>
			<td>
				<Button
					onClick={() => {
						finishRental(rental.id);
					}}>
					Finish
				</Button>
			</td>
			<td>
				<Button
					onClick={() => {
						setOpenRental(true);
						setRental(rental);
					}}>
					Edit
				</Button>
			</td>
		</tr>
	));
	returnedRentalRows = returnedRentalRows.map((rental) => (
		<tr key={rental.id} className="odd:bg-gray-900">
			<td>{rental.number}</td> <td>{rental.customer.fullName}</td>
			<td>{new Date(parseInt(rental.periodStart)).toDateString()}</td>
			<td>{new Date(parseInt(rental.periodEnd)).toDateString()}</td>
			<td>
				<Invoice setRental={setRental} setOpenInvoice={setOpenInvoice} rental={rental} />
			</td>
		</tr>
	));

	return (
		<div>
			<Title order={1}>Active Rentals</Title>
			<Table>
				<thead>
					<tr>
						<th>Rental number</th>
						<th>Customer</th>
						<th>Period start</th>
						<th>Period end</th>
						<th>Finish</th>
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>{activeRentalRows}</tbody>
			</Table>
			<Title order={1}>Finished Rentals</Title>
			<Table>
				<thead>
					<tr>
						<th>Rental number</th>
						<th>Customer</th>
						<th>Period start</th>
						<th>Period end</th>
						<th>Invoice</th>
					</tr>
				</thead>
				<tbody>{returnedRentalRows}</tbody>
			</Table>

			<Modal size="xl" opened={openRental} onClose={() => setOpenRental(false)} title="Edit Rental">
				{/* <EditRental rental={rental} /> */}
			</Modal>
			<Modal size="md" opened={openInvoice} onClose={() => setOpenInvoice(false)} title="Invoice">
				{/* Invoice pre rental */}
				{/* <Invoice setOpened={setOpenInvoice} rental={rental} /> */}
			</Modal>
		</div>
	);
};
