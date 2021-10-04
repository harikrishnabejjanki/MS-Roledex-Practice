import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  cartItemCountAndPrice,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../checkout-item/checkout-component';
import './checkout.styles.scss';

const checkoutPage = ({ cartItems, cartItemToatalCount, cartItemCount }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map(function (item, i, arr) {
        return <CheckoutItem key={i} cartItem={item} />;
      })}
      <div className="total">TOTAL: ${cartItemToatalCount}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemToatalCount: cartItemCountAndPrice,
});

export default connect(mapStateToProps, null)(checkoutPage);
