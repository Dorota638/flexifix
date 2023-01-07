import React from "react";
import { Button, Select } from "@mantine/core";
import { SelectTasks } from "../repair/SelectTasks";
import { SelectProducts } from "../common/SelectProducts";
import { TaskCart } from "../repair/TaskCart";
import { ProductCart } from "../common/ProductCart";
import { useMutation } from "@apollo/client";
import { useStore } from "../../Store";
import { showNotification } from "@mantine/notifications";
import { ADD_TASK_INVOICE_LINE, GET_TASK_INVOICE_LINES, CHANGE_REPAIR_STATUS } from "../../queries";
import { useForm } from "@mantine/form";

const SubmitTasks = ({ tasks, submitTasks }) => {
  if (tasks.length > 0) {
    return <Button onClick={() => submitTasks()}>Submit tasks</Button>;
  }
};
const SubmitProducts = ({ products, submitProducts }) => {
  if (products.length > 0) {
    return <Button onClick={() => submitProducts()}>Submit products</Button>;
  }
};
const Status = ({ repair }) => {
  const [changeRepairStatus] = useMutation(CHANGE_REPAIR_STATUS)
  const repairStatuses = useStore((state) => state.repairStatuses);
  const form = useForm({
    initialValues: {
      status: repair ? repair.status.id : {}
    }
  })

  return (
    <>
      <Select
        label="Repair status"
        onSelect={() => {
          changeRepairStatus({
            variables: {
              id: repair.id,
              status: form.values.status
            }
          })
        }}
        onChange={() => { }}
        {...form.getInputProps("status")}
        data={repairStatuses?.map((t) => ({
          value: t.id,
          label: t.value,
        }))}

      />
    </>
  )
}
const Tasks = ({ repairId, tasks, submitTasks }) => {
  return (
    <>
      <SelectTasks />
      <TaskCart repairId={repairId} />
      <SubmitTasks tasks={tasks} submitTasks={submitTasks} />
    </>
  )
}
const Products = ({ repairId, products, submitProducts }) => {
  return (
    <>
      <SelectProducts />
      <ProductCart repairId={repairId} />
      <SubmitProducts products={products} submitProducts={submitProducts} />
    </>
  )
}

export const EditRepair = ({ repair }) => {
  const [createTaskInvoiceLine] = useMutation(ADD_TASK_INVOICE_LINE, {
    refetchQueries: [{ query: GET_TASK_INVOICE_LINES, variables: { repairId: repair?.id } }],
  });
  const tasks = useStore((state) => state.taskCart);
  const products = useStore((state) => state.productCart);
  const emptyStore = useStore((state) => state.emptyStore);

  const submitTasks = () => {
    tasks?.map((task) => {
      createTaskInvoiceLine({
        variables: {
          fkRepairId: repair?.id,
          fkTask: task.id,
          amount: 1,
          time: task.duration,
          price: 123,
        },
      }).then(() => {
        showNotification({
          title: "Success",
          message: "Task added to repair",
          autoClose: 3000,
          color: "Green",
        });
        emptyStore();
      });
    })
  };
  const submitProducts = () => {
    products?.map((item) => {
      createTaskInvoiceLine({
        variables: {
          fkRepairId: repair?.id,
          fkProductId: item.product.id,
          amount: item.amount,
          price: item.product.price,
        },
      }).then(() => {
        showNotification({
          title: "Success",
          message: "Product added to repair",
          autoClose: 3000,
          color: "Green",
        });
        emptyStore();
      });
    });
  };
  return (
    <>
      <Status repair={repair} />
      <Tasks repairId={repair?.id} tasks={tasks} submitTasks={submitTasks} />
      <Products repairId={repair?.id} products={products} submitProducts={submitProducts} />
    </>
  );
};
