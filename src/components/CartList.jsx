import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { generalContext } from './ContextContainer';
import ItemCart from './ItemCart';

export default function Cart() {
  
  const { cart, totalProducts, totalPrice } = useContext(generalContext);
  
  if(cart.length === 0) {
    return (
      <div className="text-center h-screen pt-20 dark:text-white">
        <h2 className="px-4 py-6 mb-8 font-semibold">No hay elementos en el carrito</h2>
        <Link 
        to={'/'}
        className="px-6 py-3 tracking-wider border-2 border-slate-200 font-semibold active:font-bold active:before:bg-teal-400 hover:text-black hover:bg-teal-400 dark:text-white"
        >
          Hacer compras
        </Link>
      </div>  
    )
  }

  return (
    <div className="h-screen pt-24 dark:text-white">
      <div className="mx-12 flex justify-center text-lg font-semibold">
        <h2 className="px-4 py-2 border-b-2 border-r-2">
          Cantidad de productos: { totalProducts() }
        </h2>
        <h2 className="px-4 py-2 border-b-2">
          Total: { Math.round(totalPrice() * 100)/100 } USD
        </h2>
      </div>
      <div className="flex justify-center flex-wrap">
        {
          cart.map(product => <ItemCart product={product} />)
        }
      </div>
      <div className="px-4 py-4 flex justify-center">
        <Link 
          to={'/'}
          className="px-6 py-3 mr-6 tracking-wider border-2 border-slate-200 font-semibold active:font-bold active:before:bg-teal-400 hover:text-black hover:bg-teal-400 dark:text-white"
        >
          Seguir comprando
        </Link>
        <Link 
          to={'/checkout'}
          className="px-6 py-3 tracking-wider border-2 border-slate-200 font-semibold active:font-bold active:before:bg-teal-400 hover:text-black hover:bg-teal-400 dark:text-white"
        >
          Finalizar compra
        </Link>
      </div>
    </div>
  )
    
}
