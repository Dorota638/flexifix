import InputField from '../components/forms/InputField';
import Form, { FormContext } from '../components/forms/Form';
import { useState } from 'react';
import { Box, Button, Group, NumberInput, TextInput } from '@mantine/core';

import { PersonIcon, EnvelopeClosedIcon } from '@modulz/radix-icons';
import { useForm } from '@mantine/form';

export const NewCustomerForm = () => {
  const [] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  });

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
      <Box>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput icon={<PersonIcon />}  label="First Name" required />
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

    // <Form>
    //     <h1>New Customer</h1>
    //     <FormContext.Consumer>
    //         {({ form, handleFormChange }) => (
    //             <>
    //                 <InputField
    //                     label="First Name"
    //                     name="firstName"
    //                     value={form.firstName}
    //                     onChange={handleFormChange} />
    //                 <InputField
    //                     label="Last Name"
    //                     name="lastName"
    //                     value={form.lastName}
    //                     onChange={handleFormChange} />
    //                 <InputField
    //                     label="Email Address"
    //                     type="email"
    //                     name="emailAddress"
    //                     value={form.emailAddress}
    //                     onChange={handleFormChange} />
    //                 <InputField
    //                     label="Password"
    //                     type="password"
    //                     name="password"
    //                     value={form.password}
    //                     onChange={handleFormChange} />
    //             </>
    //         )}
    //     </FormContext.Consumer>
    // </Form>
  );
};
