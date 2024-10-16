import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children, item }) => {
  const [cartQuantity, setCartQuantity] = useState(
    localStorage.getItem("cartQuantity")
      ? JSON.parse(localStorage.getItem("cartQuantity"))
      : 0
  );

  const addToCart = () => {
    setCartQuantity(cartQuantity + 1);
  };

  const removeFromCart = () => {
    if (cartQuantity > 0) {
      setCartQuantity(cartQuantity - 1);
    }
  };

  const clearCart = () => {
    setCartQuantity(0);
  };

  const getCartTotal = () => {
    return item.price * cartQuantity;
  };

  useEffect(() => {
    const savedQuantity = localStorage.getItem("cartQuantity");
    if (savedQuantity) {
      setCartQuantity(JSON.parse(savedQuantity));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartQuantity", JSON.stringify(cartQuantity));
  }, [cartQuantity]);

  return (
    <CartContext.Provider
      value={{
        cartQuantity,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        item, // Passing the item down in case you need it elsewhere
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
