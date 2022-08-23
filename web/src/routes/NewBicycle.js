import { Box, Title } from "@mantine/core";
import { NewBicycleForm } from "../components/forms/NewBicycleForm";

export const NewBicycle = () => {
  return (
    <>
      <Box className="ml-20">
        <Title order={3}>Create new bicycle</Title>
        <NewBicycleForm />
      </Box>
    </>
  );
};
