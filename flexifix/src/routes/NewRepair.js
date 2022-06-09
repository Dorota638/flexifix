import InputField from '../components/forms/InputField';
import Form, { FormContext } from '../components/forms/Form';
import { useState } from 'react';
import { NewCustomerForm } from './NewCustomer';
import { NewBicycleForm } from './NewBicycle';

export const NewRepairForm = () => {

  return (
    <div>
      <NewCustomerForm />
      <NewBicycleForm />
    </div>
  );
};
