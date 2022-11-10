import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {

    const { idItem } = useParams();

    const [product, setProduct] = useState({});
  
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
  
      fetch(`https://clientes.elit.com.ar/v1/api/productos?cod_alfa=${idItem}`, requestOptions)
        .then(response => response.text())
        .then(result => {
          let resultObj = JSON.parse(result);
          setProduct(resultObj.resultado);
        })
        .catch(error => console.log('error', error));

    }, [idItem]);

  return (
    <ItemDetail product={product[0]}/>
  )
}
