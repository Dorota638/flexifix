import { useMutation } from "@apollo/client";
import { Box, Button, Table } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import React from "react";
import { useStore } from "../../Store";
import { showNotification } from "@mantine/notifications";
import { POST_NEW_REPAIR, ADD_TASK_INVOICE_LINE, ADD_PRODUCT_INVOICE_LINE } from "../../queries";

export const RepairSummary = ({ nextStep }) => {
	const customer = useStore((state) => state.selectedCustomer);
	const bicycle = useStore((state) => state.selectedBicycle);
	const signedIn = useStore((state) => state.signedIn);
	const [createRepair] = useMutation(POST_NEW_REPAIR);
	const [createTaskInvoiceLine] = useMutation(ADD_TASK_INVOICE_LINE);
	const [createProductInvoiceLine] = useMutation(ADD_PRODUCT_INVOICE_LINE);
	const emptyStore = useStore((state) => state.emptyStore);

	const repair = useStore((store) => ({
		customer: store.selectedCustomer,
		bicycle: store.selectedBicycle,
		tasks: store.taskCart,
		products: store.productCart,
	}));
	const form = useForm({
		initialValues: {
			fkPaymentMethod: 0,
			comment: "comment",
			status: "be9e0fb7-1277-45c9-8fd1-3f5b8071f0d3",
		},
	});
	const selectedTasks = repair.tasks?.map((task) => (
		<tr key={task.id} className="odd:bg-gray-900">
			<td>{task?.name}</td>
		</tr>
	));
	const selectedProducts = repair.products?.map((item) => {
		return (
			<tr key={item.product.id} className="odd:bg-gray-900">
				<td>{item.amount}</td>
				<td>{item.product.description}</td>
			</tr>
		);
	});
	const postRepair = (values) => {
		createRepair({
			variables: {
				fkBicycleId: bicycle.id,
				fkCustomerId: customer.id,
				fkTakenBy: signedIn.id,
				comment: values.comment,
				status: values.status,
			},
		})
			.then(({ data }) => {
				showNotification({
					title: "Success",
					message: "Repair Created",
					autoClose: 3000,
					color: "Green",
				});
				repair.tasks?.map((task) => {
					createTaskInvoiceLine({
						variables: {
							fkRepairId: data.createRepair.id,
							fkTask: task.id,
							amount: 1,
							time: task.duration,
							price: 123,
						},
					}).then(() => {
						showNotification({
							title: "Success",
							message: "Task added to repair",
							autoClose: 3000,
							color: "Green",
						});
					});
				});
				repair.products?.map((item) => {
					console.log("item", item);
					createProductInvoiceLine({
						variables: {
							fkRepairId: data.createRepair.id,
							fkProductId: item.product.id,
							amount: item.amount,
							price: 1,
						},
					}).then(() => {
						showNotification({
							title: "Success",
							message: "Product added to repair",
							autoClose: 3000,
							color: "Green",
						});
					});
				});
			})
			.then(() => {
				nextStep();
				emptyStore();
			})
			.catch((err) => {
				showNotification({
					title: "Ooopssss...",
					message: err.message,
					autoClose: 3000,
					color: "red",
				});
			});
	};
	return (
		<>
			<Box>
				<h1>Customer:</h1>
				<p>{repair.customer.fullName || "No customer selected"}</p>
			</Box>
			<Box>
				<h1>Bicycle:</h1>
				<p>{repair.bicycle.brand.value || "No bicycle selected"}</p>
			</Box>
			<Box className="mt-5">
				<h1>Tasks</h1>
				<Table>
					<thead>
						<tr>
							<th>Task name</th>
						</tr>
					</thead>
					<tbody>{selectedTasks}</tbody>
				</Table>
				<h1>Products</h1>
				<Table>
					<thead>
						<tr>
							<th>Amount</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>{selectedProducts}</tbody>
				</Table>
			</Box>
			<Box className="mt-5">
				<form onSubmit={form.onSubmit((values) => postRepair(values))}>
					<Button className="mt-5" type="submit">
						Submit Repair
					</Button>
				</form>
			</Box>
		</>
	);
};
