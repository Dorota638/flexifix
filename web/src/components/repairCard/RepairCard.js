import { gql, useMutation } from "@apollo/client";
import {
  Modal,
  Card,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { useStore } from "../../Store";

export const RepairCard = ({ repair }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  const technician = useStore((store) => store.signedIn.id);
  const TAKE_REPAIR = gql`
    mutation ($id: ID $fkTechnicianId: Int) {
      editRepair(input:{id: $id fkTechnicianId: $fkTechnicianId}) {
        id
        technician {
          name
        }
        dateStarted
      }
    }
  `;
  const [takeRepair] = useMutation(TAKE_REPAIR);
  return (
    <Card shadow="sm" p="lg" className="m-5 w-80">
      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>{repair.number}</Text>
        <Badge color="pink" variant="light">
          high
        </Badge>
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
          {/* finish repair button */}
          {/* finish repair button */}
          {/* finish repair button */}
          <Button
            className="mx-2 grow"
            onClick={() => {
              takeRepair({
                variables: {
                  id: repair.id,
                  fkTechnicianId: technician,
                },
              });
            }}
          >
            Take Repair
          </Button>
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
