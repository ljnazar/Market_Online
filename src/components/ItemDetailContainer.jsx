import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


export default function ItemDetailContainer() {

    const { idItem } = useParams();

    const [product, setProduct] = useState({});

    let productsPC = [
      { id: 1, name: "Comodore 64", category: "desktop", price: 4500 },
      { id: 2, name: "Lentium 3", category: "desktop", price: 4500 },
      { id: 3, name: "Celeron", category: "desktop", price: 4500 },
      { id: 4, name: "AMD 3.4 Gigawats", category: "desktop", price: 4500 },
      { id: 5, name: "Intel i9", category: "desktop", price: 4500 }
    ];
  
    useEffect(() => {
      
      const getProduct = new Promise((res, rej) => {
        setTimeout(() => {
          res(productsPC.find((item) => item.id == idItem));
        }, 2000);
      });
  
      getProduct.then((res) => {
          setProduct(res);
      });
  
    }, [idItem]);

  return (
    <div>
        {product.id && (
            <>
                {product.id + " " + product.category + " " + product.name + " " + product.price}
            </>
        )}
    </div>
  )
}
