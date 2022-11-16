import React, { useContext } from 'react'
import { generalContext } from './ContextContainer'

export default function ItemCart({ product }) {

  console.log(product);

  const {removeProduct} = useContext(generalContext);

  return (
    <div className='flex border max-w-2xl m-10'>
        <img src={product.imagenes[0]} alt={product.name} />
        <div>
            <p>Nombre: {product.nombre}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio Unidad: {product.precio}</p>
            <p>subtotal: {product.quantity * product.precio}</p>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}
