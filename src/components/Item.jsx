import React, { useState ,useEffect } from 'react';

export default function Item() {

  const [arrayDePokes, setArrayDePokes] = useState([]);

  useEffect(() => {

    const getPokes = async () => {
        try{
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
            console.log(res);
            const data = await res.json();
            console.log(data.results);
            setArrayDePokes(data.results);
        } catch (error){
            console.log(error);
        } finally {
            console.log("finally");
        }
    }

    getPokes();

    /*console.log("Fetch to firebase");
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    .then(res => res.json())
    .then(resJSON => {
        console.log(resJSON);
        setArrayDePokes(resJSON.results);
    })
    .catch(e => {
        console.log(e);
    })
    .finally(() => {
        console.log("Ya ejecutó todo")
    })*/

  }, []);

  return ( 
    <div>
      {arrayDePokes.map( 
        item => { 
            return <h2>{item.name}</h2>
        }
      )}
    </div> )
  
}
