import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'
import { generalContext } from './ContextContainer';

export default function ItemDetail({ product }) {

  const {darkMode, addProduct} = useContext(generalContext);

  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(product, quantity);
    console.log(`compraste: ${quantity} unidades de ${product.nombre}`);
  }

  return (

    <div className="flex justify-center">

      <div className="flex-col w-60 m-8 border"
        style={{
          color: darkMode ? "white" : "black",
          backgroundColor: darkMode ? "black" : "white",
          border: darkMode ? "2px solid white" : "2px solid black"
        }}
      >

        {/* {console.log(product)} */}

        <img src={product.imagenes[0]} 
          style={{
            backgroundColor: "transparent" && "white"
          }}
        />

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
          <Link to={"/cart"}>Terminar Compra</Link>
          :
          <ItemCount stockProduct={product.stock_total} onAdd={onAdd}/>
        }

      </div>

    </div>
  )
}
