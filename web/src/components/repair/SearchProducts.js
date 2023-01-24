import { useLazyQuery } from "@apollo/client";
import { Col, TextInput } from "@mantine/core";
import React from "react";
import { GET_PRODUCTS_BY_NAME } from "../../queries";
import { useStore } from "../../Store";

export const SearchProducts = () => {
	const [search] = useLazyQuery(GET_PRODUCTS_BY_NAME);
	const storeProducts = useStore((state) => state.storeProducts);

	return (
		<div>
			<TextInput
				onChange={(e) => {
					e.target.value[1]
						? search({ variables: { name: e.target.value } }).then(({ data }) => {
								storeProducts(data.productsByName);
						  })
						: console.log();
				}}
			/>
		</div>
	);
};
