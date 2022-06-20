import InputField from '../components/forms/InputField';
import Form, { FormContext } from '../components/forms/Form';
import { useState } from 'react';

export const NewSaleForm = () => {
  const [] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  });
  return (
    <Form>
      <h1>New Sale</h1>
      <FormContext.Consumer>
        {({ form, handleFormChange }) => (
          <>
            <InputField
              label="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleFormChange}
            />
            <InputField
              label="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleFormChange}
            />
            <InputField
              label="Email Address"
              type="email"
              name="emailAddress"
              value={form.emailAddress}
              onChange={handleFormChange}
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleFormChange}
            />
          </>
        )}
      </FormContext.Consumer>
    </Form>
  );
};
