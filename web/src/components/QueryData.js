import { useQuery } from "@apollo/client";
import React from "react";
import { useStore } from "../Store";
import { GET_BICYCLE_PROPS, GET_PRODUCTS, GET_PRODUCT_PROPS, GET_TASKS } from "../queries";

export const QueryData = () => {
  const { data: bicycleProps } = useQuery(GET_BICYCLE_PROPS);
  const { data: productProps } = useQuery(GET_PRODUCT_PROPS);
  const { data: tasks } = useQuery(GET_TASKS);
  const { data: products } = useQuery(GET_PRODUCTS);

  const storeBicycleProps = useStore((state) => state.storeBicycleProps);
  const storeProduceProps = useStore((state) => state.storeProduceProps);
  const storeTasks = useStore((state) => state.storeTasks);
  const storeProducts = useStore((state) => state.storeProducts);

  storeBicycleProps(bicycleProps?.bicycleProps);
  storeProduceProps(productProps?.productProps);
  storeTasks(tasks?.tasks);
  storeProducts(products?.products);

  return <></>;
};
