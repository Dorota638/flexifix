import { useState } from "react";
import { Stepper, Button, Group, Box } from "@mantine/core";
import { SelectCustomer } from "../components/common/SelectCustomer";
import { CreateCustomer } from "../components/common/CreateCustomer";
import { SelectedCustomer } from "../components/common/SelectedCustomer";
import { SelectBicycle } from "../components/repair/SelectBicycle";
import { CreateBicycle } from "../components/repair/CreateBicycle";
import { SelectTasks } from "../components/repair/SelectTasks";
import { TaskCart } from "../components/repair/TaskCart";
import { RepairSummary } from "../components/repair/RepairSummary";
import { useStore } from "../Store";

export const NewRepair = () => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const [opened, setOpened] = useState(false);
  const selectedCustomer = useStore(({ selectedCustomer }) => selectedCustomer);
  const selectedBicycle = useStore((state) => state.selectedBicycle);
  const taskCart = useStore(({ taskCart }) => taskCart);

  return (
    <div>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Customer" allowStepSelect={active > 0}>
          <Box sx={{ maxWidth: 800 }} mx="auto">
            <CreateCustomer opened={opened} setOpened={setOpened} />
            <SelectCustomer />
            <SelectedCustomer customer={selectedCustomer} />
          </Box>

          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button
              disabled={selectedCustomer ? false : true}
              onClick={nextStep}
            >
              Next
            </Button>
          </Group>
        </Stepper.Step>

        <Stepper.Step label="Bicycle" allowStepSelect={active > 1}>
          <Box sx={{ maxWidth: 800 }} mx="auto">
            <CreateBicycle opened={opened} setOpened={setOpened} />
            <SelectBicycle selectedBicycle={selectedBicycle} />
          </Box>
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button
              disabled={selectedBicycle ? false : true}
              onClick={nextStep}
            >
              Next
            </Button>
          </Group>
        </Stepper.Step>

        <Stepper.Step label="Tasks" allowStepSelect={active > 2}>
          <SelectTasks />
          <TaskCart taskCart={taskCart} />
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button
              disabled={taskCart.length === 0 ? true : false}
              onClick={nextStep}
            >
              Next
            </Button>
          </Group>
        </Stepper.Step>

        <Stepper.Step label="Summary" allowStepSelect={active > 3}>
          Repair Summary
          <RepairSummary nextStep={nextStep} />
        </Stepper.Step>
        <Stepper.Completed>Repair registered</Stepper.Completed>
      </Stepper>
    </div>
  );
};
