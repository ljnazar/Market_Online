import React, { useContext } from 'react';
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
    <div className={"pt-20 " + (darkMode ? "bg-neutral-800 text-white" : "bg-gray-100 text-black")}>
      <div className="flex justify-center flex-wrap">
        {
          cart.map(product => <ItemCart product={product} />)
        }
      </div>
      <div>
        <p>
          Cantidad de productos: { totalProducts() }
        </p>
        <p>
          Total: { Math.round(totalPrice() * 100)/100 } USD
        </p>
        <div>
        <Link to={'/'}>Seguir comprando</Link>
        </div>
        <div>
        <Link to={'/checkout'}>Finalizar compra</Link>
        </div>
      </div>
    </div>
  )
    
}
