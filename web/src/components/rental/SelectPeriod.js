import { useMutation } from '@apollo/client';
import { Button } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import React, { useState } from 'react';
import { POST_NEW_RENTAL, ADD_NEW_RENTAL_INVOICE_LINE } from '../../queries';
import { useStore } from '../../Store';

export const SelectPeriod = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [postRental] = useMutation(POST_NEW_RENTAL);
  const [addInvoiceLines] = useMutation(ADD_NEW_RENTAL_INVOICE_LINE);
  const salesperson = useStore((state) => state.signedIn);
  const selectedCustomer = useStore((state) => state.selectedCustomer);
  const rentalCart = useStore(({ rentalCart }) => rentalCart);

  return (
    <div>
      <DatePicker placeholder="Pick date" label="Start date" onChange={setStartDate} value={new Date()} />
      <DatePicker placeholder="Pick date" label="Return date" onChange={setEndDate} />
      <Button
        disabled={!endDate}
        onClick={() => {
          postRental({
            variables: {
              fkSalesPersonId: salesperson.id,
              fkCustomerId: selectedCustomer.id,
              periodStart: startDate,
              periodEnd: endDate,
            },
          }).then(({data}) => {
            console.log('rental', data);
            rentalCart.map((bicycle) => {
              addInvoiceLines({
                variables: {
                  fkRentalId: data.createRental.id,
                  fkBicycleId: bicycle.id,
                },
              });
            });
          });
        }}
      >
        Submit
      </Button>
    </div>
  );
};
