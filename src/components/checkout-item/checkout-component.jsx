import React from 'react';
import { connect } from 'react-redux';
import {
  clearItemFromCart,
  removeItem,
  addItemToCart,
} from '../../redux/cart/cart.actions';
import './checkout-styles.scss';

const checkoutItem = ({
  cartItem,
  clearItemFromCart,
  removeItem,
  addItemToCart,
}) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            removeItem(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            addItemToCart(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    addItemToCart: (item) => dispatch(addItemToCart(item)),
  };
};
export default connect(null, mapDispatchToProps)(checkoutItem);
