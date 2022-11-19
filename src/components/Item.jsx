import React, { useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { generalContext } from './ContextContainer';

export default function Item({product}) {

  const { darkMode, setLoader } = useContext(generalContext);

  // useEffect(() => {
  //   /* changed value default to true */
  //   setLoader(true);
  // }, [])

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

      {/*PASAR ESE STYLE A TAILWIND!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
      <img 
        src={product.imagenes[0] || "/without-img2.png"} 
        style={{
          backgroundColor: "white"
        }}
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
