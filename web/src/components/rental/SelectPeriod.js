import { useMutation } from "@apollo/client";
import { Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import React, { useEffect, useState } from "react";
import { EDIT_BICYCLE, POST_NEW_RENTAL } from "../../queries";
import { useStore } from "../../Store";

export const SelectPeriod = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [postRental] = useMutation(POST_NEW_RENTAL);
	const [editBicycle] = useMutation(EDIT_BICYCLE);
	const salesperson = useStore((state) => state.signedIn);
	const selectedCustomer = useStore((state) => state.selectedCustomer);
	const selectedBicycle = useStore((state) => state.selectedBicycle);

	function cumulativeValue(days) {
		let total = 50;
		for (let i = 0; i <= days; i++) {
			if (i > 1 && i <= 7) {
				total += 30;
			}
			if (i > 7) {
				total += 20;
			}
		}
		return total;
	}

	useEffect(() => {
		// Calculate the difference in milliseconds
		let difference = endDate.getTime() - startDate.getTime();
		// Convert the difference to days
		const numberOfDays = Math.round(difference / (1000 * 3600 * 24) + 1);
		console.log("numberOfDays", numberOfDays);
		console.log(cumulativeValue(numberOfDays));
	}, [endDate, startDate]);

	return (
		<div>
			<DatePicker
				placeholder="Pick date"
				label="Start date"
				onChange={setStartDate}
				value={new Date()}
			/>
			<DatePicker placeholder="Pick date" label="Return date" onChange={setEndDate} />
			<Button
				disabled={!endDate}
				onClick={() => {
					postRental({
						variables: {
							fkSalesPersonId: salesperson.id,
							fkCustomerId: selectedCustomer.id,
							fkBicycleId: selectedBicycle.id,
							periodStart: startDate,
							periodEnd: endDate,
						},
					}).then(({ data }) => {
						editBicycle({
							variables: {
								id: data.createRental.bicycle.id,
								status: "ca8fcfc3-f99b-4b99-893f-ad9a58815a26",
								holder: data.createRental.customer.id,
							},
						});
					});
				}}>
				Submit
			</Button>
		</div>
	);
};
