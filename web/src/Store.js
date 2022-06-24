import create from 'zustand';
import { devtools } from 'zustand/middleware';

const store = (set) => ({
  selectedBicycle: {},
  selectedCustomer: {
    id: '618b2f20-85eb-453f-96b2-ddd413b8dc7a',
    fullName: 'Matus Laco',
    email: 'laco.matus@gmail.com',
  },
  cart: [],
  signedIn: { id: 2, name: 'Matus Laco', role: null },
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
  storebicycleProps: (props) => set((state) => ({ ...state, bicycleProps: props }))
});

export const useStore = create(devtools(store));
