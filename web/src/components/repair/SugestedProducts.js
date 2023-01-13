import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_BY_CATEGORY } from "../../queries";
import { useStore } from "../../Store";
import { Table } from "@mantine/core";

export const SugestedProducts = ({ productCategoryId }) => {
	const { data: productList, loading } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
		variables: { categoryId:productCategoryId },
	});
	const addProductToCart = useStore(({ addProductToCart }) => addProductToCart);
console.log('productList', productList, 'loading', loading);
	const products = loading ? '' : productList.productsByCategory.map((product) => {
		return (
			<tr
				key={`prod${product.id}`}
				onClick={() => {
					addProductToCart(product);
				}}
				className="odd:bg-gray-900">
				<td>{product?.productBrand.value}</td>
				<td>{product?.productCategory.value}</td>
				<td>{product?.description}</td>
				<td>{product?.sellPrice}</td>
			</tr>
		);
	});

	return (
		<div className="child:mx-auto">
			<Table className="mt-10 max-w-md">
				<thead>
					<tr>
						<th>Brand</th>
						<th>Category</th>
						<th>Description</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{products}</tbody>
			</Table>
		</div>
	);
};
