import React, { Fragment } from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import BillTo from "./BillTo";
import { InvoiceTasksTable } from "./InvoiceTasksTable";
import { InvoiceProductsTable } from "./InvoiceProductsTable";
import { InvoiceExtrasTable } from "./InvoiceExtrasTable";

const styles = StyleSheet.create({
	page: {
		fontFamily: "Helvetica",
		fontSize: 11,
		paddingTop: 30,
		paddingLeft: 60,
		paddingRight: 60,
		lineHeight: 1.5,
		flexDirection: "column",
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
	titleContainer: {
		flexDirection: "row",
		marginTop: 24,
	},
	reportTitle: {
		color: "#61dafb",
		letterSpacing: 4,
		fontSize: 25,
		textAlign: "center",
		textTransform: "uppercase",
	},
	invoiceNoContainer: {
		flexDirection: "row",
		marginTop: 36,
		justifyContent: "flex-end",
	},
	invoiceDateContainer: {
		flexDirection: "row",
		justifyContent: "flex-end",
	},
	invoiceDate: {
		fontSize: 12,
		fontStyle: "bold",
	},
	label: {
		width: 60,
	},
});

function Invoice({ repair }) {
	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.titleContainer}>
					<Text style={styles.reportTitle}>FlexiFix</Text>
				</View>
				<Fragment>
					<View style={styles.invoiceDateContainer}>
						<Text>Danmarksgade 86A 9000 Aalborg </Text>
					</View>
					<View style={styles.invoiceDateContainer}>
						<Text>+45 91 86 95 25</Text>
					</View>
					<View style={styles.invoiceDateContainer}>
						<Text>flexi-fix@gmail.com</Text>
					</View>
					<View style={styles.invoiceDateContainer}>
						<Text>CVR: 37692182</Text>
					</View>
					<View style={styles.invoiceNoContainer}>
						<Text style={styles.label}>Invoice No:</Text>
						<Text style={styles.invoiceDate}>25/55521</Text>
					</View>
					<View style={styles.invoiceDateContainer}>
						<Text style={styles.label}>Date: </Text>
						<Text>25/2/2022</Text>
					</View>
				</Fragment>
				<BillTo repair={repair} />
				<InvoiceTasksTable repair={repair} />
				<InvoiceProductsTable repair={repair} />
				<InvoiceExtrasTable repair={repair} />
				<Text>
					<section>
						<p>Mechanic: {repair?.technician?.name}</p>
						<p>issued</p>
						<p>Payment method: {repair?.paymentMethod}</p>
					</section>
				</Text>
			</Page>
		</Document>
	);
}

export default Invoice;
