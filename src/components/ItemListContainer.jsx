import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { generalContext } from './ContextContainer';
import LoaderSkeleton from './LoaderSkeleton';

export default function ItemListContainer() {

  const { darkMode } = useContext(generalContext);

  const [loader, setLoader] = useState(true);

  const { idCategory } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {

    setLoader(true);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "user_id": 4995,
      "token": "cjnk9xexr1p"
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    if(idCategory) {
      fetch(`https://clientes.elit.com.ar/v1/api/productos?sub_categoria=${idCategory}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        const resultObj = JSON.parse(result);
        const products = resultObj.resultado;
        const productsWithStock = [...products].filter(product => product.stock_total !== 0)
        setProducts(productsWithStock);
        setLoader(false);
      })
      .catch(error => console.log('error', error));
    } else {
      fetch(`https://clientes.elit.com.ar/v1/api/productos?nombre=gamer`, requestOptions)
      .then(response => response.text())
      .then(result => {
        const resultObj = JSON.parse(result);
        const products = resultObj.resultado;
        console.log(products);
        const productsWithStock = [...products].filter(product => product.stock_total !== 0)
        setProducts(productsWithStock);
        setLoader(false);
      })
      .catch(error => console.log('error', error));
    }

  }, [idCategory])

  if (loader)
    return (
      <LoaderSkeleton />
    )

  return (
    <div 
      style={{
        backgroundColor: darkMode ? "black" : "white"
      }}
    >
      <ItemList products={products}/>
    </div>
  )
}
