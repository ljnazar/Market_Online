import React, { useContext } from 'react';
import { generalContext } from './ContextContainer';

export default function ItemCart({ product }) {

  const {darkMode, removeProduct} = useContext(generalContext);

  return (

    <div className="flex flex-col w-60 m-8 border"
    
      style={{
        color: darkMode ? "white" : "black",
        backgroundColor: darkMode ? "black" : "white",
        border: darkMode ? "2px solid white" : "2px solid black"
      }}
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

      <button onClick={() => removeProduct(product.id)}>Eliminar</button>

    </div>

  )
}
