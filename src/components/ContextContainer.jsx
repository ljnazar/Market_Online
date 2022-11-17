import React, { useState, createContext  } from 'react'

export const generalContext = createContext([]);

export default function ContextContainer( { children } ) {

  const [darkMode, setDarkMode] = useState(false);

  const [loader, setLoader] = useState(true);

  const [cart, setCart] = useState([]);

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

  const totalPrice = () => cart.reduce((previous, current) => previous + current.quantity * current.price, 0);

  const totalProducts = () => cart.reduce((previous, current) => previous + current.quantity, 0);

  return (
    <generalContext.Provider value={{
      darkMode,
      loader,
      cart,
      setDarkMode,
      setLoader,
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
