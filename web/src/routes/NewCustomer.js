import { useState } from "react";
import { Box } from "@mantine/core";

import { NewCustomerForm } from "../components/forms/NewCustomerForm";

export const NewCustomer = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <Box sx={{ maxWidth: 800 }} mx="auto">
        <NewCustomerForm />
      </Box>
    </div>
  );
};
