import { Button } from '@mantine/core';
import React from 'react';
import { AllCustomers } from '../AllCustomers';
import { Btn } from '../Btn';

export const ToDo = () => {
  return (
    <div>
      <div
        className="flex flex-wrap justify-evenly bg-slate-200 border-solid border border-primary p-5 m-2" >
        <div className="">
          <header>TO DO</header>
        </div>
        <div className="">
          <header>IN PROGRESS</header>
        </div>
        <div className="">
          <header>DONE</header>
        </div>
      </div>
      <AllCustomers/>
    </div>
  );
};
