import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
	headerContainer: {
		marginTop: 36,
	},
	billTo: {
		marginTop: 20,
		paddingBottom: 3,
		fontFamily: "Helvetica-Oblique",
	},
});

const BillTo = ({ repair }) => (
	<View style={styles.headerContainer}>
		<Text>Repair number: {repair?.number}</Text>
		<Text>Customer: {repair?.customer?.fullName}</Text>
		<Text>Bicycle: {repair?.bicycle?.brand?.value}</Text>
	</View>
);

export default BillTo;
