import { Box, Button, Group, NumberInput, TextInput, Title } from '@mantine/core';
import { PersonIcon, EnvelopeClosedIcon } from '@modulz/radix-icons';
import { useForm } from '@mantine/form';


export const NewCustomerForm = () => {

  const form = useForm({
    initialValues: {
      termsOfService: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  return (
    <>
      <Title order={3}>Create new customer</Title>
      <Box>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput icon={<PersonIcon />} label="First Name" required />
          <TextInput label="Last Name" required />
          <TextInput icon={<EnvelopeClosedIcon />} label="Email" />
          <TextInput label="Company" error="" />
          <NumberInput label="CVR" hideControls />
          <NumberInput label="Phone" hideControls />
          <TextInput label="Address" />
          <NumberInput label="ZipCode" hideControls />
          <TextInput label="City" />
          <Group position="right" mt="md">
            <Button type="submit" >Submit</Button>
          </Group>
        </form>
      </Box>
    </>
  );
};
