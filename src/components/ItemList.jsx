import React from 'react'
import Item from './Item';

export default function ItemList({products}) {

  return (
    <div className="flex justify-center flex-wrap">
      {products ? (
        <>
          {products.map((product) => (
            <Item product={product} />
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
