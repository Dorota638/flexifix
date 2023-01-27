import React from "react";
import { useStore } from "../../Store";
import { Table } from "@mantine/core";

export const SelectProducts = () => {
	const addProductToCart = useStore(({ addProductToCart }) => addProductToCart);
	const productList = useStore(({ products }) => products);

  const products = productList[0]
		? productList.map((product) => {
				return (
					<tr
						key={`prod${product.id}`}
						onClick={() => {
							addProductToCart(product);
						}}
						className="odd:bg-gray-900">
						<td>{product?.productBrand.value}</td>
						<td>{product?.productCategory.value}</td>
						<td>{product?.name}</td>
						<td>{product?.type}</td>
						<td>{product?.sellPrice}</td>
					</tr>
				);
		  })
		: "";

	return (
		<div className="child:mx-auto">
			<Table className="mt-10 max-w-md">
				<thead>
					<tr>
						<th>Brand</th>
						<th>Category</th>
						<th>Name</th>
						<th>Type</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{products}</tbody>
			</Table>
		</div>
	);
};
