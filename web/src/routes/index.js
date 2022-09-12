import { Route } from 'react-router-dom';
import React from 'react';
import NewRepair from './NewRepair';
import NewRental from './NewRental';
import NewSale from './NewSale';
import NewBicycle from './NewBicycle';
import NewCustomer from './NewCustomer';

export const Switch = () => {
  return (
    <>
        <Route path="/newRepair" element={NewRepair} />
        <Route path="/newRental" element={NewRental} />
        <Route path="/newSale" element={NewSale} />
        <Route path="/newBicycle" element={NewBicycle} />
        <Route path="/newCustomer" element={NewCustomer} />
    </>
  );
};
