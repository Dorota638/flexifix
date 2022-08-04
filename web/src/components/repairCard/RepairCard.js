import {
  Modal,
  Card,
  Text,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { useStore } from "../../Store";
import { Flair } from "./Badge";
import { TakeRepairButton } from "./TakeRepairButton";
import { FinishRepairButton } from "./FinishRepairButton";

import React from "react";

export const RepairCard = ({ repair }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  const Condition = ({ status }) => {
    console.log(status);
    if (status === 1) {
      return <TakeRepairButton repair={repair} />;
    } else {
      return <FinishRepairButton />;
    }
  };

  console.log(repair.status.id);
  console.log("repair.status.id");

  return (
    <Card shadow="sm" p="lg" className="m-5 w-80">
      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>{repair.number}</Text>
        <Flair text={repair.status.status} color={repair.status.id} />
      </Group>
      {repair.taskInvoiceLines.map((task) => (
        <Card shadow="xl" className="m-2" key={task.id}>
          <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {task.task.taskCategory.name}
          </Text>
          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {task.task.name}
          </Text>
        </Card>
      ))}

      <Modal
        overflow="inside"
        opened={opened}
        onClose={() => setOpened(false)}
        title={`Repair ${repair.number} | ${repair.status.status}`}
      >
        <div className="flex">
          <Card shadow="xl" className="m-2 grow">
            <Text size="lg">Taken by</Text>
            <Text size="md">{repair.takenBy.name}</Text>
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
          {repair.taskInvoiceLines.map((task) => (
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
    </Card>
  );
};
