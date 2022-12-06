import React, { useState, useEffect, createContext } from 'react';

export const generalContext = createContext([]);

export default function ContextContainer( { children } ) {

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id)); 

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map(product => {
        return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
      }));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  }

  const totalProducts = () => cart.reduce((previous, current) => previous + current.quantity, 0);

  const totalPrice = () => cart.reduce((previous, current) => previous + current.quantity * current.precio, 0);
  
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    darkMode ? document.body.style.backgroundColor = "#262626" : document.body.style.backgroundColor = "#f3f4f6";
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  return (
    <generalContext.Provider value={{
      darkMode,
      cart,
      setDarkMode,
      clearCart, 
      isInCart,
      removeProduct,
      addProduct,
      totalPrice,
      totalProducts
    }}>
      {children}
    </generalContext.Provider>
  )
}
