import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import { Product } from '../../App';
import ProductCard from './product-card/ProductCard';
import { dummyData } from '../../dummy-data';

const ProductList = () => {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // axios.get('https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/product.json')
    //   .then((response) => {
    //     setProducts(response.data)
    //   })
    //   .catch((error) => {
    //     window.alert(error.message)
    //     console.log(error.message)
    //   })
    setProducts(dummyData)
  }, [])

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