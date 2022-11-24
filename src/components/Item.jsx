import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { generalContext } from './ContextContainer';

export default function Item({product}) {

  const { darkMode } = useContext(generalContext);

  return (

    <div 
      className="flex flex-col w-60 m-8 border"
      style={{
        color: darkMode ? "white" : "black",
        border: darkMode ? "2px solid white" : "2px solid black"
      }}
      key={product.id}
    >

      <img 
        src={product.imagenes[0] || "/without-img.png"}
        className="bg-white"
        alt="img"
      />

      <ul className="text-center p-2 my-auto">
        <li className="font-semibold">{product.nombre}</li>
        <li className="font-semibold mt-2">Marca: {product.marca}</li>
        <li className="font-semibold mt-2">Precio: {product.precio} USD</li>
        <li className="font-bold m-2"><Link to={"/item/" + product.id}>IR AL ITEM</Link></li>
      </ul>

    </div>

  )
}
