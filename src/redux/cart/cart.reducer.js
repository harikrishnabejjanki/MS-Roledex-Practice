import CONSTANTS from './cart.types';
import { addItemTocartFunc } from './cart.util';
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANTS.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CONSTANTS.ADD_ITEMTO_CART:
      return {
        ...state,
        cartItems: addItemTocartFunc(state.cartItems, action.payload),
        //cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
