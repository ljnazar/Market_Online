import React from 'react';

export default function ItemListContainer({greeting}) {
  return (
    <div className="text-center" style={{ backgroundColor: "orange" }}>
        {greeting}
    </div>

  )
}
