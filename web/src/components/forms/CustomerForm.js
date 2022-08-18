import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  Group,
  Box,
  Loader,
  NumberInput,
} from "@mantine/core";
import { PersonIcon } from "@modulz/radix-icons";
import { gql, useMutation } from "@apollo/client";
import { useStore } from "../../Store";

const NEW_CUSTOMER = gql`
  mutation (
    $id: ID
    $firstName: String!
    $lastName: String!
    $email: String!
  ) {
    createEditCustomer(
      input: {
        id: $id
        firstName: $firstName
        lastName: $lastName
        email: $email
      }
    ) {
      id
      fullName
      email
    }
  }
`;

export const CustomerForm = ({ setOpened, customer }) => {
  const form = useForm({
    initialValues: {
      firstName: customer ? customer.firstName : "",
      lastName: customer ? customer.lastName : "",
      email: customer ? customer.email : "@",
      phone: customer ? customer.phone : "",
      company: customer ? customer.company : "",
      cvr: customer ? customer.cvr : "",
      address: customer ? customer.address : "",
      zipCOnde: customer ? customer.zipCOnde : "",
      city: customer ? customer.city : "",
    },
  });

  const [createEditCustomer, { data, loading, error }] =
    useMutation(NEW_CUSTOMER);

  const setCustomer = useStore((state) => state.selectCustomer);

  if (loading) return <Loader />;
  if (error) console.error(error);
  if (data && loading === false) {
    setCustomer(data.createEditCustomer);
    setOpened(false);
  }
  return (
    <Box>
      <form
        onSubmit={form.onSubmit((values) =>
          createEditCustomer({
            variables: {
              id: customer ? customer.id : null,
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
            },
          })
        )}
      >
        <Group>
          <div>
            <NumberInput
              // className="w-60"
              label="Phone"
              placeholder="Phone"
              {...form.getInputProps("phone")}
            />
            <TextInput
              // className="w-60"
              label="Company"
              placeholder="Company"
              {...form.getInputProps("company")}
            />
            <TextInput
              // className="w-60"
              label="CVR"
              placeholder="CVR"
              {...form.getInputProps("cvr")}
            />
            <TextInput
              // className="w-60"
              label="Address"
              placeholder="Address"
              {...form.getInputProps("address")}
            />
            <NumberInput
              // className="w-60"
              label="ZipCode"
              placeholder="ZipCode"
              {...form.getInputProps("zipCode")}
            />
            <TextInput
              // className="w-60"
              label="City"
              placeholder="City"
              {...form.getInputProps("city")}
            />
          </div>
          <div>
            <TextInput
              // className="w-60"
              icon={<PersonIcon />}
              required
              label="First Name"
              placeholder="First Name"
              {...form.getInputProps("firstName")}
            />
            <TextInput
              // className="w-60"
              required
              label="Last Name"
              placeholder="Last Name"
              {...form.getInputProps("lastName")}
            />
            <TextInput
              // className="w-60"
              required
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
          </div>
        </Group>

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};
