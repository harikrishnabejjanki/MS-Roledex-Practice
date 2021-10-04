import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ hidden, cartItems, history, dispatch }) => {
  return !hidden ? (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(function (item, i, arr) {
            return <CartItem key={i} item={item} />;
          })
        ) : (
          <span className="cart-empty">CART IS EMPTY</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
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
export default withRouter(connect(mapStateToProps, null)(CartDropdown));
