import { Modal } from '@mantine/core';
import React from 'react';
import NewCustomer from '../forms/NewCustomerForm';

const CreateCustomer = ({opened, setOpened}) => {
  
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Create customer"
    >
      <NewCustomer setOpened={setOpened}/>
    </Modal>
  );
};

export default CreateCustomer;
