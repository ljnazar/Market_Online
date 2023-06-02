import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ContextContainer from './components/ContextContainer';
import CartList from './components/CartList';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';

export default function App() {

  return (
    <ContextContainer>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/search/:idSearch" element={<ItemListContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartList />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/confirmation/:idOrder" element={<Confirmation />}/>
            <Route />
          </Routes>
      </BrowserRouter>
    </ContextContainer>
  );
}

