import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import ProductCard from './product-card/ProductCard';
import axios from 'axios';

export interface Product {
  id: number;
  name: String;
  description: String;
  price: number;
}

const ProductList = () => {

  const [products, setProducts] = useState<Product[]>([])
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios.get('https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json')
      .then((response) => {
        setProducts(response.data)
        setIsFetching(false);
      })
      .catch((error) => {
        window.alert(error.message)
        console.error(error.message)
        setIsFetching(false);
      })
  }, [])

  if (isFetching) return <p>Please wait while we fetch your products...</p>;

  if (products.length < 1 && !isFetching) {
    return (
      <p>No products to show at this time. Please try again later.</p>
    )
  }

  return (
    <div className="product-list">
      {products.map((product: Product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
          />
        )
      })}
    </div>
  )
}

export default ProductList;