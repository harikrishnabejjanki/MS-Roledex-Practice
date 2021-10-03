import CONSTANTS from './cart.types';

export const toggleCartHidden = () => {
  return {
    type: CONSTANTS.TOGGLE_CART_HIDDEN,
  };
};

export const addItemToCart = (cartItem) => {
  return {
    type: CONSTANTS.ADD_ITEMTO_CART,
    payload: cartItem,
  };
};
