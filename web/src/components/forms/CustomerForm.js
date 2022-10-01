import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box, Loader, NumberInput } from '@mantine/core';
import { PersonIcon } from '@modulz/radix-icons';
import { useMutation } from '@apollo/client';
import { useStore } from '../../Store';
import { NEW_CUSTOMER } from '../../queries';

export const CustomerForm = ({ setOpenCustomer, customer }) => {
  const form = useForm({
    initialValues: {
      firstName: customer ? customer.firstName : '',
      lastName: customer ? customer.lastName : '',
      email: customer ? customer.email : '@',
      phone: customer ? parseInt(customer.phone) : null,
      company: customer ? customer.company : '',
      cvr: customer ? customer.cvr : '',
      address: customer ? customer.address : '',
      zipCode: customer ? customer.zipCode : '',
      city: customer ? customer.city : '',
    },
  });

  const [createEditCustomer, { data, loading, error }] = useMutation(NEW_CUSTOMER);

  const selectCustomer = useStore((state) => state.selectCustomer);

  if (loading) return <Loader />;
  if (error) console.error(error);
  if (data && loading === false) {
    selectCustomer(data.createEditCustomer);
    setOpenCustomer(false);
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
              phone: values.phone,
              company: values.company,
              cvr: values.cvr,
              address: values.address,
              zipCode: values.zipCode,
              city: values.city,
            },
          })
        )}
      >
        <Group>
          <div>
            <TextInput
              icon={<PersonIcon />}
              required
              label="First Name"
              placeholder="First Name"
              {...form.getInputProps('firstName')}
            />
            <TextInput
              required
              label="Last Name"
              placeholder="Last Name"
              {...form.getInputProps('lastName')}
            />
            <TextInput
              required
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
            />
          </div>
          <div>
            <NumberInput
              label="Phone"
              placeholder="Phone"
              hideControls
              {...form.getInputProps('phone')}
            />
            <TextInput label="Company" placeholder="Company" {...form.getInputProps('company')} />
            <TextInput label="CVR" placeholder="CVR" {...form.getInputProps('cvr')} />
            <TextInput label="Address" placeholder="Address" {...form.getInputProps('address')} />
            <TextInput label="ZipCode" placeholder="ZipCode" {...form.getInputProps('zipCode')} />
            <TextInput label="City" placeholder="City" {...form.getInputProps('city')} />
          </div>
        </Group>

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};
