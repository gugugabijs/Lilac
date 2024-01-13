import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId, addedCount) => {
    setCartItems((prev) => {
      var count = prev[itemId] + addedCount;
      if (isNaN(count)) {
        count = addedCount;
      }
      return { ...prev, [itemId]: count };
    });
    console.log(cartItems);
  };
  const [favorites, setFavorites] = useState([]);
  const addToFavorites = (itemId) => {
    const selectedItem = all_product.find((item) => item.id === itemId);
    if (selectedItem) {
      if (favorites.some((favorite) => favorite.id === itemId)) {
        const updatedArray = favorites.filter((item) => item.id !== itemId);
        setFavorites(updatedArray);
      } else {
        setFavorites((prevFavorites) => [...prevFavorites, selectedItem]);
      }
    }
  };
  const getTotalFavItems = () => {
    return favorites.length;
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const removeAllFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    addToFavorites,
    favorites,
    getTotalFavItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
