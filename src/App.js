import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Item from './components/Item';

export default function App() {

  return (

    <BrowserRouter>

        <NavBar button={true} color={"#dddddd"}/>

        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenido al Market Online de Oficom"} />} />
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/category/:nameCategory" element={<Item/>} />
          <Route />
        </Routes>

    </BrowserRouter>

  );
}

