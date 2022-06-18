import InputField from './InputField'
import Form, { FormContext } from './Form';
import { useState } from 'react'


export default function NewBicycleForm() {
    const [] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: ''
    });

    return (
        <Form>
            <FormContext.Consumer>
                {({ form, handleFormChange }) => (
                    <>
                        <InputField
                            label="First Name"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleFormChange} />
                        <InputField
                            label="Last Name"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleFormChange} />
                        <InputField
                            label="Email Address"
                            type="email"
                            name="emailAddress"
                            value={form.emailAddress}
                            onChange={handleFormChange} />
                        <InputField
                            label="Password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleFormChange} />
                    </>
                )}
            </FormContext.Consumer>
        </Form>
    )
}
