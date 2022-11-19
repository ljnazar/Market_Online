import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { generalContext } from './ContextContainer';
import Loader from './Loader';

export default function ItemListContainer({greeting}) {

  //const { darkMode, loader, setLoader } = useContext(generalContext);

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
        let resultObj = JSON.parse(result);
        setProducts(resultObj.resultado);
        setLoader(false);
      })
      .catch(error => console.log('error', error));
    } else {
      fetch(`https://clientes.elit.com.ar/v1/api/productos?nombre=monitor`, requestOptions)
      .then(response => response.text())
      .then(result => {
        let resultObj = JSON.parse(result);
        setProducts(resultObj.resultado);
        setLoader(false);
      })
      .catch(error => console.log('error', error));
    }

  }, [idCategory])

  if (loader)
    return (
      <Loader />
    )

  return (
    <>
      <div className="text-center" style={{ backgroundColor: "orange" }}>
        {greeting}
      </div>
      <div 
        style={{
          backgroundColor: darkMode ? "black" : "white"
        }}
      >
        <ItemList products={products}/>
      </div>
    </>
  )
}
