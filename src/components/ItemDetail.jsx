import React from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({ product }) {

  return (

    <div className="flex justify-center">

      <div 
        className="flex flex-col w-60 mx-8 my-6 border-2 dark:text-white dark:border-white"
      >

        <img 
        src={product.imagenes[0] || "/without-img.png"}
        className="bg-white"
        alt="img"
        />

        <ul className="text-center p-2 my-auto">
          <li className="font-semibold">{product.nombre}</li>
          <li className="font-semibold mt-2">Marca: {product.marca}</li>
          <li className="font-semibold mt-2">Garantia: {product.garantia} meses</li>
          <li className="font-bold mt-2">Precio: {product.precio} USD</li>
        </ul>

        <ItemCount product={product} />

      </div>

    </div>

  )
}
