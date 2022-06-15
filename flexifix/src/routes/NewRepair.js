import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import { NewCustomerForm } from './NewCustomer';
import { NewBicycleForm } from './NewBicycle';
import InputField from '../components/forms/InputField';

export const NewRepairForm = () => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="First step" description="Select a customer" allowStepSelect={active > 0}>
          Step 1 content: Select a customer
          <InputField />
          <Button>Create a new customer</Button>
          {/* <NewCustomerForm /> */}
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Select a bicycle" allowStepSelect={active > 1}>
          Step 2 content: Select a bicycle
          <Button>Create a new bicycle</Button>
          {/* <NewBicycleForm /> */}
        </Stepper.Step>
        <Stepper.Step label="Third step" description="Select tasks" allowStepSelect={active > 2}>
          Step 3 content: Select tasks
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Select parts" allowStepSelect={active > 3}>
          Step 4 content: Select parts
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </div>
  );
};
