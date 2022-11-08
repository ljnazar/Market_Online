import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

export default function ItemListContainer({greeting}) {

  const { idCategory } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {

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

    fetch(`https://clientes.elit.com.ar/v1/api/productos?subrubro=${idCategory}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        let resultObj = JSON.parse(result);
        setProducts(resultObj.resultado);
      })
      .catch(error => console.log('error', error));

  }, [idCategory])

  return (
    <>
      <div className="text-center" style={{ backgroundColor: "orange" }}>
        {greeting}
      </div>
      <ItemList products={products}/>
    </>
  )
}
