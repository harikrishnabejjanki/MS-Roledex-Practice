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
export const clearItemFromCart = (item) => {
  return {
    type: CONSTANTS.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: CONSTANTS.REMOVE_ITEM,
    payload: item,
  };
};
