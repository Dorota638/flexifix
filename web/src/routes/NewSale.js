import { useState } from 'react';
import { Box, Button, Group, Stepper } from '@mantine/core';
import SelectCustomer from '../components/repair/SelectCustomer';
import { SelectedCustomer } from '../components/repair/SelectedCustomer';
import CreateCustomer from '../components/repair/CreateCustomer';
import { SelectProducts } from '../components/sale/SelectProducts';
import { Cart } from '../components/sale/Cart';
import { SaleSummary } from '../components/sale/SaleSummary';


export const NewSaleForm = () => {
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const [opened, setOpened] = useState(false);

    return (
        <div>
            <Stepper active={active} onStepClick={setActive} breakpoint="sm">
                <Stepper.Step label="Customer" allowStepSelect={active > 0}>
                    <Box sx={{ maxWidth: 800 }} mx="auto">
                        <Button
                            onClick={() => {
                                setOpened(true);
                            }}
                            className="my-10"
                        >
                            Create customer
                        </Button>
                        <CreateCustomer opened={opened} setOpened={setOpened} />
                        <SelectCustomer />
                        <SelectedCustomer />
                    </Box>
                </Stepper.Step>

                <Stepper.Step label="Products" allowStepSelect={active > 1}>
                    <Box sx={{ maxWidth: 800 }} mx="auto">
                        <SelectProducts />
                        <Cart />
                    </Box>
                </Stepper.Step>

        <Stepper.Step label="Tasks" allowStepSelect={active > 2}>
          <Box sx={{ maxWidth: 800 }}>
            <SaleSummary/>
          </Box>
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
