import React, { useContext } from 'react';
import { generalContext } from './ContextContainer';

export default function ItemCart({ product }) {

  const {darkMode, removeProduct} = useContext(generalContext);

  return (

    <div 
    className={"flex flex-col w-60 mx-8 my-6 border-2 " + (darkMode ? "bg-neutral-800 text-white border-white" : "bg-gray-100 text-black border-black")}
    >

      <img 
        src={product.imagenes[0] || "/without-img.png"}
        className="bg-white"
        alt="img"
      />

      <ul className="text-center p-2 my-auto">
        <li className="font-semibold">{product.nombre}</li>
        <li className="font-semibold mt-2">Cantidad: {product.quantity}</li>
        <li className="font-semibold mt-2">Precio Unidad: {product.precio} USD</li>
        <li className="font-bold mt-2">subtotal: {Math.round((product.quantity * product.precio) * 100)/100} USD</li>
      </ul>

      <button 
        className={"px-6 py-3 tracking-wider border-2 border-slate-200 font-semibold active:font-bold active:before:bg-teal-400 hover:text-black hover:bg-teal-400 " + (darkMode ? "text-white" : "text-slate-900 bg-white")}
        onClick={() => removeProduct(product.id)}
      >
        Eliminar
      </button>

    </div>

  )
}
