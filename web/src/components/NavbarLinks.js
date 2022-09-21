import { Button, Stack, Title } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

export const NavbarLinks = () => {
  return (
    <>
      <Title order={3}>Create new</Title>
      <Stack
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        })}
      >
        <Button variant="outline" component={Link} to="/newRepair">
          Repair
        </Button>
        <Button variant="outline" component={Link} to="/newRental">
          Rental
        </Button>
        <Button variant="outline" component={Link} to="/newSale">
          Sale
        </Button>
        <Button variant="outline" component={Link} to="/newBicycle">
          Bicyckle
        </Button>
        <Button variant="outline" component={Link} to="/newCustomer">
          Customer
        </Button>

      </Stack>

      <Title order={3}>Navigate to</Title>
      <Stack sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      })}>
        <Button component={Link} to="/repairs">Repairs</Button>
        <Button component={Link} to="/rentals">Rentals</Button>
        <Button component={Link} to="/customers">Customers</Button>
        <Button component={Link} to="/bicycles">Bicycles</Button>
        <Button component={Link} to="/inventory">Inventory</Button>
        <Button component={Link} to="/analytics">Analytics</Button>

      </Stack>
    </>
  );
};
