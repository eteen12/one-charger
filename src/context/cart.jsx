"use client";
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const addToCart = (item, selectedAmount) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);

      if (existingItemIndex > -1) {
        // If the item already exists in the cart, update its quantity
        return prevItems.map((currentItem, index) => {
          if (index === existingItemIndex) {
            // Increment quantity based on the selected amount
            return {
              ...currentItem,
              quantity: currentItem.quantity + selectedAmount.quantity,
            };
          }
          return currentItem; // Keep other items unchanged
        });
      }

      // If the item does not exist in the cart, add it with the selected quantity
      return [...prevItems, { ...item, quantity: selectedAmount.quantity }];
    });
  };
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartContext, CartProvider };
