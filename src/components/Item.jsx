import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { generalContext } from './ContextContainer';

export default function Item({product}) {

  const { darkMode } = useContext(generalContext);

  return (

    <div 
      className="flex-col w-60 m-8 border"
      style={{
        color: darkMode ? "white" : "black",
        backgroundColor: darkMode ? "black" : "white",
        border: darkMode ? "2px solid white" : "2px solid black"
      }}
      key={product.id}
    >
      
      <img 
        src={product.imagenes[0] || "/without-img.png"}
        className="bg-white"
      />

      <ul className="text-center">
        <li>Nombre: {product.nombre}</li>
        <li>Marca: {product.marca}</li>
        <li className="font-bold mt-2">Precio: {product.precio} USD</li>
        <li className="font-bold m-2"><Link to={"/item/" + product.id}>IR AL ITEM</Link></li>
      </ul>

    </div>

  )
}
