import { useQuery } from "@apollo/client";
import React from "react";
import { useStore } from "../Store";
import { GET_BICYCLE_PROPS, GET_PRODUCT_PROPS, GET_TASKS } from "../queries";

export const QueryData = () => {
  const { data: bicycleProps } = useQuery(GET_BICYCLE_PROPS);
  const { data: productProps } = useQuery(GET_PRODUCT_PROPS);
  const { data: tasks } = useQuery(GET_TASKS);

  const storeBicycleProps = useStore((state) => state.storeBicycleProps);
  const storeProduceProps = useStore((state) => state.storeProduceProps);
  const storeTasks = useStore((state) => state.storeTasks);

  storeBicycleProps(bicycleProps?.bicycleProps);
  storeProduceProps(productProps?.productProps);
  storeTasks(tasks?.tasks);

  return <></>;
};
