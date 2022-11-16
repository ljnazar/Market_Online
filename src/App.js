import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ContextContainer from './components/ContextContainer';
import Cart from './components/Cart';

export default function App() {

  return (
    <ContextContainer>
      <BrowserRouter>
          <NavBar button={true} color={"#dddddd"} />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenido al Market Online de Oficom S.R.L"} />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />}/>
            <Route />
          </Routes>
      </BrowserRouter>
    </ContextContainer>
  );
}

