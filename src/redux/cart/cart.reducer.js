import CONSTANTS from './cart.types';
import { addItemTocartFunc, removeItem } from './cart.util';
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
    case CONSTANTS.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };
    case CONSTANTS.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(function (item, i, arr) {
          return item.id !== action.payload.id;
        }),
      };

    default:
      return state;
  }
};

export default cartReducer;
