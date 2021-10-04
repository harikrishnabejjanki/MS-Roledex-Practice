export const addItemTocartFunc = (existingCartItems, itemToAddToCart) => {
  const isExistingCartItem = existingCartItems.find((item, i, arr) => {
    return item.id === itemToAddToCart.id;
  });

  if (isExistingCartItem) {
    return existingCartItems.map((cartItem, i, arr) => {
      return cartItem.id === itemToAddToCart.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...existingCartItems, { ...itemToAddToCart, quantity: 1 }];
};

export const removeItem = (cartItems, cartItemToRemove) => {
  const isExistingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToRemove.id;
  });
  if (isExistingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) => {
    return cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};
