import { useMutation } from "@apollo/client";
import { Button, Group, Loader, NumberInput, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { CREATE_EDIT_PRODUCT } from "../queries";
import { useStore } from "../Store";

export const NewInventory = () => {
	const productProps = useStore((store) => store.productProps);
	const [crateProduct, { data, loading, error }] = useMutation(CREATE_EDIT_PRODUCT);

  const form = useForm({
    initialValues: {

    },
  });

  if (loading) return <Loader />;
  if (error) console.error(error);

	return (
		<div>
			<form
				onSubmit={form.onSubmit((values) => {
					return crateProduct({
						variables: {
							fkSupplier: values.productSupplier,
							fkBrand: values.productBrand,
							fkGroup: values.productGroup,
							fkCategory: values.productCategory,
							description: values.description,
							ean: values.ean,
							stock: values.stock,
							minStock: values.minStock,
							buyPrice: values.buyPrice,
							sellPrice: values.sellPrice,
							expectedDurability: values.expectedDurability,
						},
					});
				})}>
				<Select
					label="Brand"
					placeholder="Brand"
					searchable
					nothingFound="No options"
					data={productProps?.brand.map((b) => ({
						value: b.id,
						label: b.value,
					}))}
					{...form.getInputProps("productBrand")}
				/>
				<Select
					label="Category"
					placeholder="Category"
					searchable
					nothingFound="No options"
					data={productProps?.category.map((c) => ({
						value: c.id,
						label: c.value,
					}))}
					{...form.getInputProps("productCategory")}
				/>
				<TextInput
					label="Description"
					placeholder="Description"
					{...form.getInputProps("description")}
				/>
				<NumberInput label="Stock" placeholder="Stock" {...form.getInputProps("stock")} />
				<NumberInput label="MinStock" placeholder="MinStock" {...form.getInputProps("minStock")} />
				<NumberInput label="BuyPrice" placeholder="BuyPrice" {...form.getInputProps("buyPrice")} />
				<NumberInput
					label="SellPrice"
					placeholder="SellPrice"
					{...form.getInputProps("sellPrice")}
				/>
				<TextInput label="EAN" placeholder="EAN" {...form.getInputProps("ean")} />
				<Select
					label="Supplier"
					placeholder="Supplier"
					searchable
					nothingFound="No options"
					data={productProps?.supplier.map((s) => ({
						value: s.id,
						label: s.value,
					}))}
					{...form.getInputProps("productSupplier")}
				/>
				<Select
					label="Group"
					placeholder="Group"
					searchable
					nothingFound="No options"
					data={productProps?.group.map((s) => ({
						value: s.id,
						label: s.value,
					}))}
					{...form.getInputProps("productGroup")}
				/>
				<NumberInput
					label="Durability"
					placeholder="Durability"
					{...form.getInputProps("expectedDurability")}
				/>
				<Group position="right" mt="md">
					<Button type="submit">Submit</Button>
				</Group>
			</form>
		</div>
	);
};
