import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'

export default function ItemDetail({product}) {

  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) => {
    console.log(`compraste: ${quantity} unidades`);
    setGoToCart(true);
  }

  return (

    <div className="flex justify-center">

      {product ? (

        <div className="flex-col w-60 m-8 border">

          {console.log(product)}

          <img src={product.imagenes[0]} />

          <ul className="text-center">
            <li>Id: {product.id}</li>
            <li>Categoria: {product.categoria}</li>
            <li>Nombre: {product.nombre}</li>
            <li>Marca: {product.marca}</li>
            <li>Garantia: {product.garantia} meses</li>
            <li className="font-bold mt-2">Precio: {product.precio} USD</li>
          </ul>

          {
            goToCart ? 
            <Link to={"/checkout"}>Terminar Compra</Link> 
            :
            <ItemCount stockProduct={product.stock_total} onAdd={onAdd}/>
          }

        </div>
      ) : (
        <div>
          Loading...
        </div>
      )}
    </div>
  )
}
