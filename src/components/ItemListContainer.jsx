import React, {useEffect} from 'react';
import Item from './Item';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

export default function ItemListContainer({greeting}) {
  return (
    <>
      <div className="text-center" style={{ backgroundColor: "orange" }}>
          {greeting}
      </div>
      <ItemCount />
      <ItemList />
      <Item />
    </>
  )
}
