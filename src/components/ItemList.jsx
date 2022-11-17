import React, { useState } from 'react'
import Item from './Item';
//import Loader from './Loader';

export default function ItemList({products}) {

  // if(loading)
  // return (
  //   <Loader />
  // )

  return (
    <div className="flex justify-center flex-wrap">
      {products.map((product) => (
        <Item product={product} />
      ))}
    </div>
  )
}
