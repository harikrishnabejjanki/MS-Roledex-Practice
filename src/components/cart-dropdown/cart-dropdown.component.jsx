import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ hidden, cartItems }) => {
  return !hidden ? (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(function (item, i, arr) {
          return <CartItem key={i} item={item} />;
        })}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  const { hidden } = state.cart;
  return {
    hidden,
    cartItems: selectCartItems(state),
  };
};
export default connect(mapStateToProps, null)(CartDropdown);
