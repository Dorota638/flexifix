import { Modal, Card, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function RepairCard() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];



  return (
    <div style={{ margin: '2rem' }}>
      {/* <Card component={Link} to="/repairs/" shadow="sm" p="lg"> */}
      <Card shadow="sm" p="lg">
        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>Repair number #25</Text>
          <Badge color="pink" variant="light">
            high
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          -new breaks
        </Text>

        <Modal
          overflow="inside"
          opened={opened}
          onClose={() => setOpened(false)}
          title="Introduce yourself!"
        >
          Modal content
        </Modal>

        <Button onClick={() => setOpened(true)} variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Details
        </Button>
      </Card>
    </div>
  );
}