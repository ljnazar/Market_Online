import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

export default function App() {

  return (

    <div>
      <NavBar button={true} color={"#dddddd"}/>
      <ItemListContainer greeting={"Bienvenido al Market Online de Oficom"} />
    </div>

  );
}

