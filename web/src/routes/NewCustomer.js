import React, { useState } from 'react';
import { Box } from '@mantine/core';
import { CreateCustomer } from '../components/common/CreateCustomer';

export const NewCustomer = () => {
  const [openCustomer, setOpenCustomer] = useState(true);
  return (
    <div>
      <Box>
        <CreateCustomer openCustomer={openCustomer} setOpenCustomer={setOpenCustomer} />
      </Box>
    </div>
  );
};
