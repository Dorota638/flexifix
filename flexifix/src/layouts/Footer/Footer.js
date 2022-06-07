import { Button, Loader, Paper, Text } from '@mantine/core';
import React from 'react';

export default function Footer() {
  return (
    <div>
      <Paper>
        <Text>Palo pod uz von prosiom ta</Text>
        <Text>Ale Palinecko nevysiel</Text>
        <Button>Jedna</Button>
        <Button>Dva</Button>
        <Button>Tri</Button>
        <Loader />
      </Paper >
    </div>
  );
}
