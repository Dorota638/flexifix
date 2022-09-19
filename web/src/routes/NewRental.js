import { useState } from "react";
import { Stepper, Button, Group, Box } from "@mantine/core";
import { SelectCustomer } from "../components/common/SelectCustomer";
import { CreateCustomer } from "../components/common/CreateCustomer";
import { SelectedCustomer } from "../components/common/SelectedCustomer";
import { useStore } from "../Store";
import { SelectRentalBicycle } from "../components/rental/SelectRentalBicycle";
import { SelectPeriod } from "../components/rental/SelectPeriod";

export const NewRental = () => {
    const [active, setActive] = useState(0);
    const nextStep = () =>
        setActive((current) => (current < 5 ? current + 1 : current));
    const prevStep = () =>
        setActive((current) => (current > 0 ? current - 1 : current));
    const [opened, setOpened] = useState(false);
    const selectedCustomer = useStore(({ selectedCustomer }) => selectedCustomer);
    const selectedBicycle = useStore((state) => state.selectedBicycle);
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
                        <SelectRentalBicycle selectedBicycle={selectedBicycle} />
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
                <Stepper.Step label="Period" allowStepSelect={active > 1}>
                    <Box sx={{ maxWidth: 800 }} mx="auto">
                        <SelectPeriod />
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
                </Stepper.Step>
                <Stepper.Completed>Rental created</Stepper.Completed>
            </Stepper>
        </div>
    );
};
