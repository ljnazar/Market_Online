import React from 'react'
import Item from './Item';

export default function ItemList({products}) {
  return (
    <div>
      {products ? (
        <>
          {products.map((product) => (
            <Item product={product}/>
          ))}
        </>
      ) : (
        <>
          Loading...
        </>
      )}
    </div>
  )
}
