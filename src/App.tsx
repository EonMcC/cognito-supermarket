import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Basket from './components/basket/Basket';
import ProductList from './components/product-list/ProductList';

export interface Product {
  id: number;
  name: String;
  description: String;
  price: number;
}

function App() {

  const [showBasket, setShowBasket] = useState(false);

  return (
    <div className="app">
      <Header onBasketClick={() => setShowBasket(true)} />

      <div className="app__content">
        <aside>
          <div>
            <h2>Cognito Supermarkets</h2>
            <p>Welcome to Cognito Supermarkets - your one stop shop for all fresh and local food.</p>
          </div>
        </aside>

        <ProductList />

      </div>

      {showBasket && <Basket onClose={() => setShowBasket(false)}/>}

    </div>
  );
}

export default App;
