import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { generalContext } from './ContextContainer';
import ItemCart from './ItemCart';

export default function Cart() {

  const { cart, totalPrice } = useContext(generalContext);

  console.log(`cart: ${cart}`);

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
        {
            cart.map(product => <ItemCart product={product} />)
        }
        <p>
            Total: { totalPrice() }
        </p>
    </>
  )
    
}
