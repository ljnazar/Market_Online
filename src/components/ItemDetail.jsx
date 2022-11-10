import React from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({product}) {
  return (

    <div className="flex justify-center">

      {product ? (

        <div className="flex-col w-60 m-8 border">

          {console.log(product)}

          <img src={product.imagenes[0]} />

          <ul className="text-center">
            <li>Id: {product.id}</li>
            <li>Categoria: {product.categoria}</li>
            <li>Name: {product.nombre}</li>
            <li>Marca: {product.marca}</li>
            <li>Garantia: {product.garantia} meses</li>
            <li className="font-bold mt-2">Precio: {product.precio} USD</li>
          </ul>

          <ItemCount stockProduct={product.stock_total}/>

          <div className="flex justify-center space-x-2 text-sm font-medium p-2 mb-2">
            <button className="px-6 h-12 font-semibold tracking-wider border border-slate-200 text-slate-900 active:font-bold active:border-2 active:border-black active:before:bg-teal-400 hover:bg-teal-400" type="button">
              ADD TO CART
            </button>
            <button className="flex-none flex items-center justify-center w-12 h-12 text-black" type="button" aria-label="Like">
              <svg width={20} height={20} fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>

        </div>
      ) : (
        <div>
          Loading...
        </div>
      )}
    </div>
  )
}
