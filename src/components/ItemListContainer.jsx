import React from 'react';
import ItemCount from './ItemCount';

export default function ItemListContainer({greeting}) {
  return (
    <>
      <div className="text-center" style={{ backgroundColor: "orange" }}>
          {greeting}
      </div>
      <ItemCount />
    </>
  )
}
