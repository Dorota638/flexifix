import { useState } from 'react';
import { Stepper, Button, Group, Box } from '@mantine/core';
import { SelectCustomer } from '../components/common/SelectCustomer';
import { CreateCustomer } from '../components/common/CreateCustomer';
import { SelectedCustomer } from '../components/common/SelectedCustomer';
import { SelectedBicycle } from '../components/common/SelectedBicycle';
import { SelectBicycle } from '../components/repair/SelectBicycle';
import { SelectTasks } from '../components/repair/SelectTasks';
import { SelectProducts } from '../components/common/SelectProducts';
import { TaskCart } from '../components/repair/TaskCart';
import { ProductCart } from '../components/common/ProductCart';
import { RepairSummary } from '../components/repair/RepairSummary';
import { useStore } from '../Store';
import { CreateBicycle } from '../components/repair/CreateBicycle';

export const NewRepair = () => {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const [openBicycle, setOpenBicycle] = useState(false);
  const [openCustomer, setOpenCustomer] = useState(false);
  const selectedCustomer = useStore(({ selectedCustomer }) => selectedCustomer);
  const selectedBicycle = useStore(({ selectedBicycle }) => selectedBicycle);
  const taskCart = useStore(({ taskCart }) => taskCart);
  // const productCart = useStore(({ productCart }) => productCart);

  return (
    <div>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Customer" allowStepSelect={active > 0}>
          <Box sx={{ maxWidth: 800 }} mx="auto">
            <CreateCustomer openCustomer={openCustomer} setOpenCustomer={setOpenCustomer} />
            <SelectCustomer />
            <SelectedCustomer customer={selectedCustomer} />
          </Box>

          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button disabled={selectedCustomer ? false : true} onClick={nextStep}>
              Next
            </Button>
          </Group>
        </Stepper.Step>

        <Stepper.Step label="Bicycle" allowStepSelect={active > 1}>
          <Box sx={{ maxWidth: 800 }} mx="auto">
            <CreateBicycle openBicycle={openBicycle} setOpenBicycle={setOpenBicycle} />
            <SelectBicycle selectedBicycle={selectedBicycle} />
            <SelectedBicycle bicycle={selectedBicycle} />
          </Box>
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button disabled={selectedBicycle ? false : true} onClick={nextStep}>
              Next
            </Button>
          </Group>
        </Stepper.Step>

        <Stepper.Step label="Tasks" allowStepSelect={active > 2}>
          <SelectTasks />
          <TaskCart />
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button disabled={taskCart.length === 0 ? true : false} onClick={nextStep}>
              Next
            </Button>
          </Group>
        </Stepper.Step>

        <Stepper.Step label="Products" allowStepSelect={active > 3}>
          <SelectProducts />
          <ProductCart />
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>Next</Button>
          </Group>
        </Stepper.Step>

        <Stepper.Step label="Summary" allowStepSelect={active > 4}>
          Repair Summary
          <RepairSummary nextStep={nextStep} />
        </Stepper.Step>
        <Stepper.Completed>Repair registered</Stepper.Completed>
      </Stepper>
    </div>
  );
};
