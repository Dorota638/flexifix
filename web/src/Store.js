import create from 'zustand';
import { devtools } from 'zustand/middleware';

const store = (set) => ({
  selectedBicycle: {},
  selectedCustomer: {},
  selectCustomer: (customer) => set((state) => ({ selectedCustomer: customer })),
  selectBicycle: (bicycle) => set((state) => ({ selectedBicycle: bicycle })),
});

export const useStore = create(devtools(store));
