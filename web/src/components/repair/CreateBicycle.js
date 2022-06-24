import { Modal } from '@mantine/core';
import React from 'react';
import NewBicycle from '../forms/NewBicycleForm';



const CreateBicycle = ({ opened, setOpened, data }) => {


  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Create bicycle"
    >
      <NewBicycle setOpened={setOpened} data={data} />
    </Modal>
  );
};

export default CreateBicycle;
