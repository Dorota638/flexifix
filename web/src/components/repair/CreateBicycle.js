import { Modal } from '@mantine/core';
import React from 'react';
<<<<<<< Updated upstream
import NewBicycle from '../forms/newBicycleForm/NewBicycleForm';
=======
import NewBicycleForm from '../forms/NewBicycleForm';
>>>>>>> Stashed changes



const CreateBicycle = ({ opened, setOpened }) => {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Create bicycle"
    >
      <NewBicycleForm setOpened={setOpened} />
    </Modal>
  );
};

export default CreateBicycle;
