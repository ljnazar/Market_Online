import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { generalContext } from './ContextContainer';
import LoaderSpiner from './LoaderSpiner';

export default function ItemDetailContainer() {

    const { darkMode } = useContext(generalContext);

    const [loader, setLoader] = useState(true);

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
      
      fetch(`https://clientes.elit.com.ar/v1/api/productos?id=${idItem}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        let resultObj = JSON.parse(result);
        setProduct(resultObj.resultado);
        setLoader(false);
        })
        .catch(error => console.log('error', error));
        
    }, [idItem]);
      
  if (loader)
    return (
      <LoaderSpiner />
  )
      
  return (
    <div 
      style={{
        backgroundColor: darkMode ? "black" : "white"
      }}
    >
      <ItemDetail product={product[0]} />
    </div>
  )
}
