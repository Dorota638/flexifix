import create from 'zustand';
import { devtools } from 'zustand/middleware';

const store = (set) => ({
  selectedBicycle: {},
  selectedCustomer: {},
  cart: [],
  signedIn: {  },
  selectCustomer: (customer) => set((state) => ({ ...state, selectedCustomer: customer })),
  selectBicycle: (bicycle) => set((state) => ({ ...state, selectedBicycle: bicycle })),
  addToCart: (product) =>
    set(({ cart }) => {
      const productIndex = cart.findIndex((cartProduct) => cartProduct.product.id === product.id);
      if (productIndex !== -1) {
        const cartProduct = cart[productIndex];
        cartProduct.amount++;
      } else {
        cart.push({
          amount: 1,
          product,
        });
      }
    }),
  removeFromCart: ({ id }) =>
    set(({ cart }) => {
      const productIndex = cart.findIndex((cartItem) => cartItem.product.id === id);
      if (productIndex === -1) {
        console.log(new Error('Something went wrong: index not found in cart'));
      } else {
        const productToRemove = cart[productIndex];
        if (productToRemove.amount === 1) {
          cart.splice(productIndex, 1);
        } else {
          cart[productIndex].amount--;
        }
      }
    }),
  signIn: (employee) => set((state) => ({ ...state, signedIn: employee })),
});

export const useStore = create(devtools(store));
