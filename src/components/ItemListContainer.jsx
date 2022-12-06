import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import LoaderSkeleton from './LoaderSkeleton';

export default function ItemListContainer() {

  const [loader, setLoader] = useState(true);

  const { idCategory } = useParams();

  const { idSearch } = useParams();

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

    let route = '';

    if(idCategory) {
      route = `sub_categoria=${idCategory}`;
    } else if(idSearch) {
      route = `nombre=${idSearch}`;
    } else {
      route = `nombre=gamer`;
    }

    fetch(`https://clientes.elit.com.ar/v1/api/productos?${route}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      const resultObj = JSON.parse(result);
      const products = resultObj.resultado;
      const productsWithStock = [...products].filter(product => product.stock_total !== 0)
      setProducts(productsWithStock);
      setLoader(false);
    })
    .catch(error => console.log('error', error));

  }, [idCategory, idSearch])

  if (loader)
    return (
      <LoaderSkeleton />
    )

  return (
    <div 
      className={"pt-20"}
    >
      {products.length === 0 ? 
        (<h2 className="text-center font-semibold">
          SIN STOCK
        </h2>)
        :
        (<ItemList products={products}/>)
      }
    </div>
  )
}
