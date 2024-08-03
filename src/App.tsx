import React, { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import ProductCard from './components/product-card/ProductCard';
import { dummyData } from './dummy-data';
import Header from './components/header/Header';
import Basket from './components/basket/Basket';

export interface Product {
  id: number;
  name: String;
  description: String;
  price: number;
}

function App() {

  const [products, setProducts] = useState<Product[]>([])
  const [showBasket, setShowBasket] = useState(false);

  useEffect(() => {
    // axios.get('https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json')
    //   .then((response) => {
    //     setProducts(response.data)
    //     console.log(response.data)
    //   })
    //   .catch((error) => {
    //     // TODO Show error to customer
    //     console.log(error.message)
    //   })
    setProducts(dummyData)
  }, [])

  return (
    <div className="app">
      <Header onBasketClick={() => setShowBasket(true)} />

      <div className="app__content">
        <nav className="nav">
          {products.map((product: Product) => {
            return (
              <p key={product.id}>{product.name}</p>
            )
          })}
        </nav>

        <section className="products-container">
          {products.map((product: Product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
              />
            )
          })}
        </section>
      </div>

      {showBasket && <Basket onClose={() => setShowBasket(false)}/>}

    </div>
  );
}

export default App;
