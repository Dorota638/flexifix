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
      case 1:
        return <TakeRepair repair={repair} />;
      case 3:
        return <FinishRepair repair={repair} setOpened={setOpened} />;
      case 4:
        return <ReturnRepair repair={repair} setOpened={setOpened} />;
      case 5:
        return <Text size="lg">Returned</Text>;
      case 6:
        return <Text size="lg"> Canceled </Text>;
      default:
        return <Text size="lg">ERR</Text>;
    }
  };

  const CanEdit = ({ status }) => {
    if (status === 5 || status === 6) {
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
        <Flair text={repair.status.status} color={repair.status.id} />
        <Text>Customer: {repair.customer.fullName}</Text>
        <Text>Taken by: {repair?.takenBy?.name}</Text>
        <Group>
          <Text>Bicycle</Text>
          <Group position="apart">
            <Text>Brand: {repair.bicycle.brand.name}</Text>
            <Text>Type: {repair.bicycle.type}</Text>
            <Text>Color: {repair.bicycle.color.color}</Text>
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
                {repair.bicycle.color.color}
              </Text>
              <Text className="mr-3" size="md">
                {repair.bicycle.brand.name}
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
          <EditRepair repairId={repair.id} />
        </Modal>
      </>
    </Card>
  );
};
