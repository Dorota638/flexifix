import React from "react";
import { ProductCart } from "../common/ProductCart";
import { SearchProducts } from "./SearchProducts";
import { SelectProducts } from "./SelectProducts";

export const Products = () => {
	return (
		<div>
      <SearchProducts />
			<SelectProducts />
			<ProductCart />
		</div>
	);
};
