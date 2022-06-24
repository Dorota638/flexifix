import create from 'zustand';
import { devtools } from 'zustand/middleware';

const store = (set) => ({
  selectedBicycle: {},
  selectedCustomer: {},
  cart: [],
  signedIn: {},
  selectCustomer: (customer) => set((state) => ({ ...state, selectedCustomer: customer })),
  selectBicycle: (bicycle) => set((state) => ({ ...state, selectedBicycle: bicycle })),
  addToCart: (product) =>
    set(({ cart }) => {
      const productIndex = cart.findIndex((cartProduct) => cartProduct.product.id === product.id);
      if (productIndex !== -1) {
        return {
          cart: cart.map((cartProduct) =>
            cartProduct.product.id === product.id
              ? { ...cartProduct, amount: cartProduct.amount + 1 }
              : cartProduct
          ),
        };
      } else {
        return {
          cart: [
            ...cart,
            {
              amount: 1,
              product,
            },
          ],
        };
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
          return cart.filter((product) => productToRemove.id !== product.id);
        } else {
          cart[productIndex].amount--;
        }
      }
    }),
  signIn: (employee) => set((state) => ({ ...state, signedIn: employee })),
});

export const useStore = create(devtools(store));
