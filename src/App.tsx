import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbars from './14.Ecom/Navbar';
import Home from './14.Ecom/Home';
import Cart from './14.Ecom/Cart';
import Data from './14.Ecom/Data';

interface Item {
  id: number;
  name: string;
  price: number;
}

const App: React.FC = () => {
  const [data, setData] = useState<Item[]>(Data);
  const [cart, setCart] = useState<Item[]>([]);
  const [search, setSearch] = useState<string>('');

  const addCart = (item: Item) => {
    setCart([...cart, item]);
  };

  

  return (
    <BrowserRouter>
      <Navbars search={search} size={cart.length} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home addCart={addCart} search={search} data={data} />}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="*" element={<h1>404 Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
