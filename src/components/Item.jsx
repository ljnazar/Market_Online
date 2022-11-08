import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({product}) {

  return ( 

    <div key={product.cod_alfa}>
      {JSON.stringify(product)}
      <Link to={"/item/" + product.cod_alfa}>IR AL ITEM</Link>
      <br/>
      <br/>
    </div>

  )
  
}
