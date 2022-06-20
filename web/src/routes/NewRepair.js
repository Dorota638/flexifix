import { useState } from 'react';
import { Stepper, Button, Group, Box } from '@mantine/core';
import SelectCustomer from '../components/repair/SelectCustomer';
import CreateCustomer from '../components/repair/CreateCustomer';
import { SelectedCustomer } from '../components/repair/SelectedCustomer';
import { SelectBicycle } from '../components/repair/SelectBicycle';
import CreateBicycle from '../components/repair/CreateBicycle';

export const NewRepairForm = () => {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const [opened, setOpened] = useState(false);

  return (
    <div>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        
        <Stepper.Step label="Customer" allowStepSelect={active > 0}>
          <Box sx={{ maxWidth: 800 }} mx="auto">
            <Button onClick={() => { setOpened(true) }} className="my-10" >
              Create customer
            </Button>
            <CreateCustomer opened={opened} setOpened={setOpened} />
            <SelectCustomer />
            <SelectedCustomer />
          </Box>
        </Stepper.Step>

        <Stepper.Step label="Bicycle" allowStepSelect={active > 1}>
          <Box sx={{ maxWidth: 800 }} mx="auto">
            <Button onClick={() => { setOpened(true) }} className="my-10" >
              Create Bicycle
            </Button>
            <CreateBicycle opened={opened} setOpened={setOpened} />
            <SelectBicycle />
          </Box>
        </Stepper.Step>

        <Stepper.Step label="Tasks" allowStepSelect={active > 2}>
          Step 3 content: Select tasks
        </Stepper.Step>
        
        <Stepper.Step label="Parts" allowStepSelect={active > 3}>
          Step 4 content: Select parts
        </Stepper.Step>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next</Button>
      </Group>
    </div>
  );
};
