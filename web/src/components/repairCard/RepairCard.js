import React from "react";
import { Modal, Card, Text, Button, Group, useMantineTheme, } from "@mantine/core";
import { useState } from "react";
import { Flair } from "./Badge";
import { TakeRepair } from "./TakeRepair";
import { FinishRepair } from "./FinishRepair";
import { ReturnRepair } from "./ReturnRepair";
import { EditRepair } from "./EditRepair";

export const RepairCard = ({ repair }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  const Condition = ({ status }) => {
    switch (status) {
      case "be9e0fb7-1277-45c9-8fd1-3f5b8071f0d3": //waiting for repair
        return <TakeRepair repair={repair} />;
      case '7983b8b5-472d-4e07-946a-c157face13a6': //in progress
        return <FinishRepair repair={repair} setOpened={setOpened} />;
      case "0c3abf0e-a548-445b-8323-e3f580d54a84": //waiting for pickup
        return <ReturnRepair repair={repair} setOpened={setOpened} />;
      case "e8f93e09-851a-4c24-adda-07867725ca81": //done
        return <Text size="lg">Returned</Text>;
      case "3e487a79-74d2-464c-b695-1d738ac58c48":
        return <Text size="lg"> Canceled </Text>;
      default:
        return <Text size="lg">ERR</Text>;
    }
  };

  const CanEdit = ({ status }) => {
    if (status === "418d6f62-0e10-4869-beb6-a9177fbf5cd5" || status === "cbf710fd-870b-4219-876b-b236693f86f2" || status === "337a9aaa-8839-45a5-8eff-37bad227846c") {
      return;
    } else {
      return (
        <Group position="center">

          <Button onClick={() => setOpenEdit(true)}>Edit Repair</Button>
        </Group>
      );
    }
  };

  return (
    <Card shadow="sm" p="lg" className="m-5 w-80">
      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>{repair.number}</Text>
        <Flair text={repair.status.value} color={repair.status.id} />
        <Text>Customer: {repair.customer.fullName}</Text>
        <Text>Taken by: {repair?.takenBy?.name}</Text>
        <Group>
          <Text>Bicycle</Text>
          <Group position="apart">
            <Text>Brand: {repair.bicycle.brand.value}</Text>
            <Text>Type: {repair.bicycle.type}</Text>
            <Text>Color: {repair.bicycle.color.value}</Text>
          </Group>
        </Group>
      </Group>

      <Modal
        overflow="inside"
        opened={opened}
        onClose={() => setOpened(false)}
        title={`Repair ${repair.number} | ${repair.status.status}`}
      >
        <div className="flex">
          <Card shadow="xl" className="m-2 grow">
            <Text size="lg">Taken by</Text>
            <Text size="md">{repair?.takenBy?.name}</Text>
          </Card>
          <Card shadow="xl" className="m-2 grow">
            <Text size="lg">Customer</Text>
            <Text size="md">{repair.customer.fullName}</Text>
          </Card>
        </div>
        <div className="flex">
          <Card shadow="xl" className="m-2 w-1/2">
            <Text size="lg">Bicycle</Text>
            <div className="flex">
              <Text className="mr-3" size="md">
                {repair.bicycle.color.value}
              </Text>
              <Text className="mr-3" size="md">
                {repair.bicycle.brand.value}
              </Text>
              <Text className="mr-3" size="md">
                {repair.bicycle.type}
              </Text>
            </div>
          </Card>
          <Card shadow="xl" className="m-2 w-1/2">
            <Text size="lg">Technician</Text>
            <div className="flex">
              <Text className="mr-3" size="md">
                {repair?.technician?.name ? repair.technician.name : "none"}
              </Text>
            </div>
          </Card>
        </div>
        <Card shadow="xl" className="m-2 grow">
          <Text size="lg">Tasks</Text>
          {repair?.taskInvoiceLines?.map((task) => (
            <Card shadow="xl" className="m-2" key={task.id}>
              <Text
                size="md"
                style={{ color: secondaryColor, lineHeight: 1.5 }}
              >
                {task.task.taskCategory.name}
              </Text>
              <Text
                size="sm"
                style={{ color: secondaryColor, lineHeight: 1.5 }}
              >
                {task.task.name}
              </Text>
            </Card>
          ))}
        </Card>
        <div className="flex">
          <Condition status={repair.status.id} />
        </div>
      </Modal>

      <Button
        onClick={() => setOpened(true)}
        variant="light"
        color="blue"
        fullWidth
        style={{ marginTop: 14 }}
      >
        Details
      </Button>
      <CanEdit status={repair.status.id} />
      <>
        <Modal
          size={600}
          opened={openEdit}
          onClose={() => setOpenEdit(false)}
          title="Edit Repair"
        >
          <EditRepair repair={repair} />
        </Modal>
      </>
    </Card>
  );
};
