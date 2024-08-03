import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Basket from './components/basket/Basket';
import ProductList from './components/product-list/ProductList';

function App() {

  const [showBasket, setShowBasket] = useState(false);

  return (
    <div className="app">
      {/* The Header, ProductList, and Basket sections are placed in their own components to keep App.tsx lean. */}
      <Header onBasketClick={() => setShowBasket(true)} />

      <div className="app__content">
        {/* This <aside> could be it's own component, however I kept it here as it is a small piece of code.
        In a real app this <aside> would likely be larger and warrant it's own component. */}
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
