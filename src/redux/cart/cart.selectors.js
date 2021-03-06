import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0)
);

export const cartItemCountAndPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc, curr) => {
      return acc + curr.quantity * curr.price;
    }, 0)
);
