// App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <ProductList cart={cart} setCart={setCart} />
      <Cart cart={cart} clearCart={clearCart} />
    </div>
  );
}

export default App;
