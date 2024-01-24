import React, { useState, createContext, useEffect } from 'react';
import { MenuList } from '../helpers/MenuList';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= MenuList.length; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const cartItemsFromSessionStorage = JSON.parse(sessionStorage.getItem("cart"));
  const [cartItems, setCartItems] = useState(
     cartItemsFromSessionStorage||getDefaultCart()
  );

 

  useEffect(()=>{
    sessionStorage.setItem("cart",JSON.stringify(cartItems));
  },[cartItems]);

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const updateCartItemCount = (newAmount, id) => {
    setCartItems((prev) => ({ ...prev, [id]: newAmount }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = MenuList.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount || 0;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalAmount,
  };

  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
