import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { generalContext } from './ContextContainer';
import ItemCart from './ItemCart';

export default function Cart() {

  const { darkMode, cart, totalProducts, totalPrice } = useContext(generalContext);

  if(cart.length === 0) {
    return (
        <>
          <p>No hay elementos en el carrito</p>
          <Link to={'/'}>Hacer compras</Link>
        </>
    )
  }

  return (
    <>
      <div className="flex justify-center flex-wrap"
        style={{
          backgroundColor: darkMode ? "black" : "white",
        }}
      >
        {
          cart.map(product => <ItemCart product={product} />)
        }
      </div>
      <p>
        Cantidad de productos: { totalProducts() }
      </p>
      <p>
        Total: { totalPrice() } USD
      </p>
      <p>
        <Link to={'/'}>Seguir comprando</Link>
      </p>
      <p>
        <Link to={'/pago'}>Finalizar compra</Link>
      </p>
    </>
  )
    
}
