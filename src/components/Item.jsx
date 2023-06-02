import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({product}) {

  return (
    
    <div 
    className="flex flex-col w-60 mx-8 my-6 border-2 dark:border-white dark:text-white"
    key={product.id}
    >

      <img 
        src={product.imagenes[0] || "/without-img.png"}
        className="bg-white border-2"
        alt="img"
      />

      <ul className="text-center p-2 my-auto">
        <li className="font-semibold">{product.nombre}</li>
        <li className="font-semibold mt-2">Marca: {product.marca}</li>
        <li className="font-semibold mt-2">Precio: {product.precio} USD</li>
        <li className="font-bold m-2">
          <Link to={"/item/" + product.id}>
            + Info
          </Link>
        </li>
      </ul>

    </div>

  )
}
