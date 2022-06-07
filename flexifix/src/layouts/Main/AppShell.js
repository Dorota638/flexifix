import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import OurHeader from '../Header/Header';
import { NavbarLinks } from '../../components/NavbarLinks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToDo } from '../../components/todolist/ToDo.js';

import { NewRepairForm } from '../../routes/NewRepair';
import { NewRentalForm } from '../../routes/NewRental';
import { NewSaleForm } from '../../routes/NewSale';
import { NewBicycleForm } from '../../routes/NewBicycle';
import { NewCustomerForm } from '../../routes/NewCustomer';

export default function Shell() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <Router>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        header={
          <Header height={65}>
            <div
              style={{ display: 'flex', alignItems: 'center', height: '100%' }}
            >
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <OurHeader />
            </div>
          </Header>
        }
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <NavbarLinks />
          </Navbar>
        }
      >
        <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path="/newRepair" element={<NewRepairForm />} />
          <Route path="/newRental" element={<NewRentalForm />} />
          <Route path="/newSale" element={<NewSaleForm />} />
          <Route path="/newBicycle" element={<NewBicycleForm />} />
          <Route path="/newCustomer" element={<NewCustomerForm />} />
        </Routes>
      </AppShell>
    </Router>
  );
}
