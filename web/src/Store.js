import create from 'zustand';
import { devtools } from 'zustand/middleware';

const store = (set) => ({
  selectedBicycle: {},
  selectedCustomer: {
    id: '618b2f20-85eb-453f-96b2-ddd413b8dc7a',
    fullName: 'Matus Laco',
    email: 'laco.matus@gmail.com',
  },
  productCart: [],
  bicycleCart: [],
  signedIn: { id: 2, name: 'Matus Laco', role: null },
  bicycleProps: {},
  productProps: {},
  emptyCart: () => set((state) => ({...state, productCart: [], bicycleCart: [] })),
  selectCustomer: (customer) => set((state) => ({ ...state, selectedCustomer: customer })),
  selectBicycle: (bicycle) => set((state) => ({ ...state, selectedBicycle: bicycle })),
  addProductToCart: (product) =>
    set(({ productCart }) => {
      const productIndex = productCart.findIndex(
        (cartProduct) => cartProduct.product.id === product.id
      );
      if (productIndex !== -1) {
        return {
          productCart: productCart.map((cartProduct) =>
            cartProduct.product.id === product.id
              ? { ...cartProduct, amount: cartProduct.amount + 1 }
              : cartProduct
          ),
        };
      } else {
        return {
          productCart: [
            ...productCart,
            {
              amount: 1,
              product,
            },
          ],
        };
      }
    }),
  removeProductFromCart: ({ id }) =>
    set(({ productCart }) => {
      const productIndex = productCart.findIndex((cartItem) => cartItem.product.id === id);
      if (productIndex === -1) {
        console.log(new Error('Something went wrong: index not found in cart'));
      } else {
        const productToRemove = productCart[productIndex];
        if (productToRemove.amount === 1) {
          return {
            productCart: productCart.filter(({ product }) => {
              return product.id !== productToRemove.product.id;
            }),
          };
        } else {
          return {
            productCart: productCart.map((cartProduct) =>
              cartProduct.product.id === id
                ? { ...cartProduct, amount: cartProduct.amount - 1 }
                : cartProduct
            ),
          };
        }
      }
    }),
  addBicycleToCart: (bicycle, price) => {
    const bicycleItem = { ...bicycle, price };
    return set(({ bicycleCart }) => {
      const bicycleIndex = bicycleCart.findIndex((cartBicycle) => cartBicycle.id === bicycle.id);
      if (bicycleIndex === -1) {
        return { bicycleCart: [...bicycleCart, bicycleItem] };
      }
    });
  },

  removeBicycleFromCart: ({ id }) =>
    set(({ bicycleCart }) => {
      console.log('id', id);
      return {
        bicycleCart: bicycleCart.filter((bicycle) => {
          console.log('bicycle', bicycle);
          return bicycle.id !== id;
        }),
      };
    }),
  signIn: (employee) => set((state) => ({ ...state, signedIn: employee })),
  storeBicycleProps: (props) => set((state) => ({ ...state, bicycleProps: props })),
  storeProduceProps: (props) => set((state) => ({ ...state, productProps: props })),
});

export const useStore = create(devtools(store));
