import { useQuery } from "@apollo/client";
import React from "react";
import { useStore } from "../Store";
import { GET_BICYCLE_PROPS, GET_ALL_PRODUCTS, GET_PRODUCT_PROPS, GET_REPAIR_STATUSES, GET_TASKS, GET_TASK_PROPS } from "../queries";

export const QueryData = () => {
  const { data: bicycleProps } = useQuery(GET_BICYCLE_PROPS);
  const { data: productProps } = useQuery(GET_PRODUCT_PROPS);
  const { data: taskProps } = useQuery(GET_TASK_PROPS);
  // const { data: tasks } = useQuery(GET_TASKS);
  // const { data: products } = useQuery(GET_ALL_PRODUCTS);
  const { data: statuses } = useQuery(GET_REPAIR_STATUSES);

  const storeBicycleProps = useStore((state) => state.storeBicycleProps);
  const storeProduceProps = useStore((state) => state.storeProduceProps);
  const storeTaskProps = useStore((state) => state.storeTaskProps);
  // const storeTasks = useStore((state) => state.storeTasks);
  // const storeProducts = useStore((state) => state.storeProducts);
  const storeRepairStatuses = useStore((state) => state.storeRepairStatuses);

  storeBicycleProps(bicycleProps?.bicycleProps);
  storeProduceProps(productProps?.productProps);
  storeTaskProps(taskProps?.taskProps);
  // storeTasks(tasks?.tasks);
  // storeProducts(products?.products);
  storeRepairStatuses(statuses?.repairStatuses)
  return <></>;
};
