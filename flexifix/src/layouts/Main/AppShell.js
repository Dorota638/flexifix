import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Footer,
} from '@mantine/core';
import OurHeader from '../Header/Header';
import { NavbarLinks } from '../../components/NavbarLinks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NewRepairForm } from '../../routes/NewRepair';
import { NewRentalForm } from '../../routes/NewRental';
import { NewSaleForm } from '../../routes/NewSale';
import { NewBicycleForm } from '../../routes/NewBicycle';
import { NewCustomerForm } from '../../routes/NewCustomer';
import Analytics from '../../routes/Analytics';
import Inventory from '../../routes/Inventory';
import Home from '../../routes/Home';
import Repairs from '../../routes/Repairs';
import Bicycles from '../../routes/Bicycles';

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
        footer={
          <Footer height={60} p="md">
            Application footer
          </Footer>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newRepair" element={<NewRepairForm />} />
          <Route path="/newRental" element={<NewRentalForm />} />
          <Route path="/newSale" element={<NewSaleForm />} />
          <Route path="/newBicycle" element={<NewBicycleForm />} />
          <Route path="/newCustomer" element={<NewCustomerForm />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/bicycles" element={<Bicycles />} />
        </Routes>

      </AppShell>
    </Router>
  );
}
