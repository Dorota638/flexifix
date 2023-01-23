import React from "react";
import { ProductCart } from "../common/ProductCart";
import { SelectProducts } from "./SelectProducts";

export const Products = () => {
	return (
		<div>
			<SelectProducts />
			<ProductCart />
		</div>
	);
};
