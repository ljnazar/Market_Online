import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({product}) {

  return (

      <div className="flex-col w-60 m-8 border">

        {console.log(product)}

        <img src={product.imagenes[0]} />

        <ul className="text-center">
          <li>Name: {product.nombre}</li>
          <li>Marca: {product.marca}</li>
          <li className="font-bold mt-2">Precio: {product.precio} USD</li>
          <li className="font-bold m-2"><Link to={"/item/" + product.codigo_alfa}>IR AL ITEM</Link></li>
        </ul>

      </div>

  )
}
