import { useState } from "react";
import { Box, Button, Group, Stepper } from "@mantine/core";
import { SelectCustomer } from "../components/common/SelectCustomer";
import { SelectedCustomer } from "../components/common/SelectedCustomer";
import { CreateCustomer } from "../components/common/CreateCustomer";
import { SelectProducts } from "../components/common/SelectProducts";
import { SelectBicycles } from "../components/sale/SelectBicycles";
import { SaleSummary } from "../components/sale/SaleSummary";
import { useStore } from "../Store";
import { ProductCart } from "../components/common/ProductCart";
import { BicycleCart } from "../components/sale/BicycleCart";

export const NewSale = () => {
	const [active, setActive] = useState(0);
	const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
	const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
	const selectedCustomer = useStore(({ selectedCustomer }) => selectedCustomer);

	const [bicycles, setBicycles] = useState(false);
	const [products, setProducts] = useState(true);
	const showBicycles = () => {
		setBicycles(true);
		setProducts(false);
	};
	const showProducts = () => {
		setBicycles(false);
		setProducts(true);
	};

	const [openCustomer, setOpenCustomer] = useState(false);

	return (
		<div>
			<Stepper active={active} onStepClick={setActive} breakpoint="sm">
				<Stepper.Step label="Customer" allowStepSelect={active > 0}>
					<Box sx={{ maxWidth: 800 }} mx="auto">
						<CreateCustomer opened={openCustomer} setOpenCustomer={setOpenCustomer} />
						<SelectCustomer />
						<SelectedCustomer customer={selectedCustomer} />
					</Box>
				</Stepper.Step>

				<Stepper.Step label="Products" allowStepSelect={active > 1}>
					<Box sx={{ maxWidth: 800 }} mx="auto">
						<Button onClick={() => showProducts()}>Show Products</Button>
						<Button onClick={() => showBicycles()} className="ml-5">
							Show Bicycles
						</Button>
						<SelectProducts hidden={bicycles} />
						<SelectBicycles hidden={products} />
						<ProductCart />
						<BicycleCart />
					</Box>
				</Stepper.Step>

				<Stepper.Step label="Tasks" allowStepSelect={active > 2}>
					<Box sx={{ maxWidth: 800 }}>
						<SaleSummary />
					</Box>
				</Stepper.Step>

				<Stepper.Step label="Invoice" allowStepSelect={active > 3}>
					Invoice
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
