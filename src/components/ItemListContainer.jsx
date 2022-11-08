import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

export default function ItemListContainer({greeting}) {

  const { idCategory } = useParams();

  const [products, setProducts] = useState([]);

  let productsPC = [
    { id: 1, name: "Comodore 64", category: "desktop", price: 4500 },
    { id: 2, name: "Lentium 3", category: "desktop", price: 4500 },
    { id: 3, name: "Celeron", category: "desktop", price: 4500 },
    { id: 4, name: "AMD 3.4 Gigawats", category: "desktop", price: 4500 },
    { id: 5, name: "Intel i9", category: "desktop", price: 4500 },
    { id: 6, name: "Alienware", category: "notebook", price: 4500 }
  ];

  useEffect(() => {
    
    const getProducts = new Promise((res, rej) => {
      setTimeout(() => {
        res(productsPC);
      }, 2000);
    });

    getProducts.then((res) => {
      if (idCategory) {
        setProducts(res.filter((item) => item.category === idCategory))
      } else {
        setProducts(res);
      }
    })

  }, [idCategory])
  



  return (
    <>
      <div className="text-center" style={{ backgroundColor: "orange" }}>
          {greeting}
      </div>
      <div>
        {!products.length && "Loading..."}
        {products.map((item) => (
          <div key={item.id}>
            {JSON.stringify(item)}
            <br/>
            <br/>
          </div>
        ))}
      </div>
      {/*<ItemCount />
      <ItemList />
      <Item />*/}
    </>
  )
}
