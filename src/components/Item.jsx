import React, { useState ,useEffect } from 'react';
// REVISAR
//import {useParams} from "react-router-dom";

export default function Item() {

  const [arrayDePokes, setArrayDePokes] = useState([]);

  useEffect( () => {

    const getPokes = async () => {
        try {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
            //console.log(res);
            const data = await res.json();
            //console.log(data.results);
            setArrayDePokes(data.results);
        } catch (error) {
            console.log(error);
        } finally {
            console.log("finally");
        }
    }

    getPokes();

  }, []);

  return ( 
    <div>
      {/* {!productos.length && "Loading..."} */}
      {arrayDePokes.map( item => { 
        return <li key={item.name.toString()}>{item.name}</li>
      })}
    </div>
  )
  
}
