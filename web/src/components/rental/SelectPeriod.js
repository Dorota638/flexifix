import { useMutation } from '@apollo/client';
import { Button } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import React, { useState } from 'react'
import { POST_NEW_RENTAL } from "../../queries";
import { useStore } from '../../Store';

export const SelectPeriod = () => {
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [postRental] = useMutation(POST_NEW_RENTAL)
    const salesperson = useStore((state) => state.signedIn)
    const selectedCustomer = useStore((state) => state.selectedCustomer)
    const selectedBicycle = useStore((state) => state.selectedBicycle)
    return (
        <div>
            <DatePicker placeholder="Pick date" label="Start date" onChange={setStartDate} />
            <DatePicker placeholder="Pick date" label="Return date" onChange={setEndDate} />
            <Button disabled={!startDate || !endDate} onClick={() => {
                postRental({
                    variables: {
                        fkSalesPersonId: salesperson.id,
                        fkCustomerId: selectedCustomer.id,
                        fkBicycleId: selectedBicycle.id,
                        periodStart: startDate,
                        periodEnd: endDate
                    }
                })
            }}>Submit</Button>
        </div>
    )
}
