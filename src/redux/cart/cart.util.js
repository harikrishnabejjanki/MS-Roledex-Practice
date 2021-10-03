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
