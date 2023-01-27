import React from "react";
import { ProductCart } from "../common/ProductCart";
import { SearchProducts } from "../common/SearchProducts";
import { SelectProducts } from "../common/SelectProducts";

export const Products = () => {
	return (
		<div>
      <SearchProducts />
			<SelectProducts />
			<ProductCart />
		</div>
	);
};
