import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  signedIn: { id: 2, name: "Matus Laco" },
  selectedBicycle: {},
  selectedCustomer: undefined,
  productCart: [],
  bicycleCart: [],
  taskCart: [],
  bicycleProps: {},
  productProps: {},
  tasks: {},
  taskCategories: {},

  emptyCart: () =>
    set((state) => ({
      ...state,
      productCart: [],
      bicycleCart: [],
      taskCart: [],
    })),
  selectCustomer: (customer) =>
    set((state) => ({ ...state, selectedCustomer: customer })),
  selectBicycle: (bicycle) =>
    set((state) => ({ ...state, selectedBicycle: bicycle })),
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
      const productIndex = productCart.findIndex(
        (cartItem) => cartItem.product.id === id
      );
      if (productIndex === -1) {
        console.log(new Error("Something went wrong: index not found in cart"));
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
      const bicycleIndex = bicycleCart.findIndex(
        (cartBicycle) => cartBicycle.id === bicycle.id
      );
      if (bicycleIndex === -1) {
        return { bicycleCart: [...bicycleCart, bicycleItem] };
      }
    });
  },
  removeBicycleFromCart: ({ id }) =>
    set(({ bicycleCart }) => {
      return {
        bicycleCart: bicycleCart.filter((bicycle) => {
          return bicycle.id !== id;
        }),
      };
    }),
  addTaskToCart: (task) => {
    return set(({ taskCart }) => {
      const taskIndex = taskCart.findIndex(
        (cartTask) => cartTask.id === task.id
      );
      if (taskIndex === -1) {
        return { taskCart: [...taskCart, task] };
      }
    });
  },
  removeTaskFromCart: ({ id }) =>
    set(({ taskCart }) => {
      return {
        taskCart: taskCart.filter((task) => {
          return task.id !== id;
        }),
      };
    }),
  signIn: (employee) => set((state) => ({ ...state, signedIn: employee })),
  storeBicycleProps: (props) =>
    set((state) => ({ ...state, bicycleProps: props })),
  storeProduceProps: (props) =>
    set((state) => ({ ...state, productProps: props })),
  storeTasks: (props) => set((state) => ({ ...state, tasks: props })),
  storeTaskCategories: (props) =>
    set((state) => ({ ...state, taskCategories: props })),
});

export const useStore = create(devtools(store));
