import { Box, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { NewBicycleForm } from "../components/forms/NewBicycleForm";

export const NewBicycle = () => {
  const form = useForm({
    initialValues: {
      termsOfService: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <>
      <Box className="ml-20">
        <Title order={3}>Create new bicycle</Title>
        <NewBicycleForm />
      </Box>
    </>
  );
};
