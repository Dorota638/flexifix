import { gql, useMutation } from "@apollo/client";
import { Box, Button, Table } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import React from "react";
import { useStore } from "../../Store";
import { showNotification } from "@mantine/notifications";

const POST_NEW_REPAIR = gql`
  mutation (
    $fkBicycleId: String!
    $fkCustomerId: String!
    $fkTakenBy: Int!
    $comment: String
    $status: Int!
  ) {
    createRepair(
      input: {
        fkBicycleId: $fkBicycleId
        fkCustomerId: $fkCustomerId
        fkTakenBy: $fkTakenBy
        comment: $comment
        status: $status
      }
    ) {
      id
      bicycle {
        id
      }
      customer {
        id
      }
      takenBy {
        id
      }
      createdAt
      updatedAt
      status {
        id
      }
      number
    }
  }
`;

const POST_TASKS = gql`
  mutation (
    $fkTask: Int!
    $fkRepairId: String!
    $amount: Int!
    $time: Float!
    $price: Float!
  ) {
    createTaskInvoiceLine(
      input: {
        fkTask: $fkTask
        fkRepairId: $fkRepairId
        amount: $amount
        time: $time
        price: $price
      }
    ) {
      id
      task {
        id
        name
        taskCategory {
          name
          id
        }
        duration
      }
      fkRepairId
      amount
      price
      time
    }
  }
`;

export const RepairSummary = () => {
  const customer = useStore((state) => state.selectedCustomer);
  const bicycle = useStore((state) => state.selectedBicycle);
  const signedIn = useStore((state) => state.signedIn);
  const [createRepair] = useMutation(POST_NEW_REPAIR);
  const [createTaskInvoiceLine] = useMutation(POST_TASKS);

  const repair = useStore((store) => ({
    customer: store.selectedCustomer,
    bicycle: store.selectedBicycle,
    tasks: store.taskCart,
  }));
  const form = useForm({
    initialValues: {
      fkPaymentMethod: 0,
      comment: "comment",
      status: 1,
    },
  });
  const selectedtasks = repair.tasks?.map((task) => (
    <tr key={task.id} className="odd:bg-gray-900">
      <td>{task?.name}</td>
    </tr>
  ));
  const postRepair = (values) => {
    createRepair({
      variables: {
        fkBicycleId: bicycle.id,
        fkCustomerId: customer.id,
        fkTakenBy: signedIn.id,
        comment: values.comment,
        status: values.status,
      },
    })
      .then(({ data }) => {
        showNotification({
          title: "Success",
          message: "Repair Created",
          autoClose: 3000,
          color: "Green",
        });
        repair.tasks?.map((task) => {
          createTaskInvoiceLine({
            variables: {
              fkRepairId: data.createRepair.id,
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
          });
        });
      })
      .catch((err) => {
        console.log("error ", err);
        showNotification({
          title: "Ooopssss...",
          message: err.message,
          autoClose: 3000,
          color: "red",
        });
      });
  };
  return (
    <>
      <Box>
        <h1>Customer:</h1>
        <p>{repair.customer.fullName || "No customer selected"}</p>
      </Box>
      <Box>
        <h1>Bicycle:</h1>
        <p>{repair.bicycle.brand.name || "No bicycle selected"}</p>
      </Box>
      <Box className="mt-5">
        <Table>
          <thead>
            <tr>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>{selectedtasks}</tbody>
        </Table>
      </Box>
      <Box className="mt-5">
        <form onSubmit={form.onSubmit((values) => postRepair(values))}>
          <Button className="mt-5" type="submit">
            Submit Repair
          </Button>
        </form>
      </Box>
    </>
  );
};
