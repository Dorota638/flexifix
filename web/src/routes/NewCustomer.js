import { Box } from "@mantine/core";

import { NewCustomerForm } from "../components/forms/NewCustomerForm";

export const NewCustomer = () => {

  return (
    <div>
      <Box sx={{ maxWidth: 800 }} mx="auto">
        <NewCustomerForm />
      </Box>
    </div>
  );
};
