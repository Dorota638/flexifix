import { Box, Button, Group, NumberInput, TextInput, Title } from '@mantine/core';
import { PersonIcon, EnvelopeClosedIcon } from '@modulz/radix-icons';
import { useForm } from '@mantine/form';
import { gql, useMutation } from '@apollo/client';

const ADD_CUSTOMER = gql`
mutation Mutation(
  $firstName: String!,
  $lastName: String!,
  $company: String,
  $cvr: String,
  $phone: String,
  $address: String,
  $zipCode: String,
  $city: String,
  $email: String,
  $idInfo: String,
) {
  createCustomer(input:
    $firstName: String!,
    $lastName: String!,
    $company: String,
    $cvr: String,
    $phone: String,
    $address: String,
    $zipCode: String,
    $city: String,
    $email: String,
    $idInfo: String,) {
    id
    fullName
  }
}`;

export const NewCustomerForm = () => {
  const [createCustomer, { data, loading, error }] = useMutation(ADD_CUSTOMER);

  const form = useForm({
    initialValues: {
      email: "@",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  // console.log("formvalues", form.values);
  // console.log("data", data);
  return (
    <>
      <Title order={3}>Create new customer</Title>
      <Box>
        <form onSubmit={e => {
          e.preventDefault();
          // createCustomer({ variables: form.values })
        }}>
          <TextInput value={form.values.firstName}
            onChange={(event) => form.setFieldValue('firstName', event.currentTarget.value)}

            icon={<PersonIcon />} label="First Name" required />
          <TextInput value={form.values.lastName}
            onChange={(event) => form.setFieldValue('lastName', event.currentTarget.value)}

            label="Last Name" required />
          <TextInput value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}

            icon={<EnvelopeClosedIcon />} label="Email" placeholder="your@email.com"
            {...form.getInputProps('email')} required />
          <TextInput value={form.values.company}
            onChange={(event) => form.setFieldValue('company', event.currentTarget.value)}

            label="Company" error="" />
          <TextInput value={form.values.cvr}
            onChange={(event) => form.setFieldValue('cvr', event.currentTarget.value)}

            label="CVR" />
          <TextInput value={form.values.phone}
            onChange={(event) => form.setFieldValue('phone', event.currentTarget.value)}

            label="Phone" />
          <TextInput value={form.values.address}
            onChange={(event) => form.setFieldValue('address', event.currentTarget.value)}

            label="Address" required />
          <TextInput value={form.values.zipCode}
            onChange={(event) => form.setFieldValue('zipCode', event.currentTarget.value)}

            label="ZipCode" />
          <TextInput value={form.values.city}
            onChange={(event) => form.setFieldValue('city', event.currentTarget.value)}

            label="City" />
          <Group position="right" mt="md">
            <Button type="submit" >Submit</Button>
          </Group>
        </form>
      </Box>
    </>
  );
};
