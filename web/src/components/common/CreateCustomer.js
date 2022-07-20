import { Modal } from '@mantine/core';
import React from 'react';
import {NewCustomerForm} from '../forms/NewCustomerForm';

const CreateCustomer = ({opened, setOpened}) => {
  
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Create customer"
    >
      <NewCustomerForm setOpened={setOpened}/>
    </Modal>
  );
};

export default CreateCustomer;
