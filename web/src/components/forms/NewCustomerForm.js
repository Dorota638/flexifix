import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box, Loader } from "@mantine/core";
import { PersonIcon } from "@modulz/radix-icons";
import { gql, useMutation } from "@apollo/client";
import { useStore } from "../../Store";

const NEW_CUSTOMER = gql`
  mutation ($firstName: String!, $lastName: String!, $email: String!) {
    createCustomer(
      input: { firstName: $firstName, lastName: $lastName, email: $email }
    ) {
      id
      fullName
      email
    }
  }
`;

export const NewCustomerForm = ({ setOpened }) => {
  const form = useForm({
    initialValues: {
      email: "@",
    },
  });

  const [createCustomer, { data, loading, error }] = useMutation(NEW_CUSTOMER);

  const setCustomer = useStore((state) => state.selectCustomer);

  if (loading) return <Loader />;
  if (error) console.error(error);
  if (data && loading === false) {
    setCustomer(data.createCustomer);
    setOpened(false);
  }
  return (
    <Box className="ml-20" sx={{ maxWidth: 300 }} mx="auto">
      <form
        onSubmit={form.onSubmit((values) =>
          createCustomer({
            variables: {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
            },
          })
        )}
      >
        <TextInput
          icon={<PersonIcon />}
          required
          label="First Name"
          placeholder="First Name"
          {...form.getInputProps("firstName")}
        />
        <TextInput
          required
          label="Last Name"
          placeholder="Last Name"
          {...form.getInputProps("lastName")}
        />
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};
