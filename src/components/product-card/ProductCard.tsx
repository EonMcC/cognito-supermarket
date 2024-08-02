import React, { useEffect, useState } from 'react';
import './ProductCard.scss';
import avocado from '../../assets/avocado.png';
import grapes from '../../assets/grapes.png';
import pizza from '../../assets/pizza.png';
import { Product } from '../../App';
import ProductDetails from './product-details/ProductDetails';

const ProductCard: React.FC<{product: Product}> = ({product}) => {

  const [image, setImage] = useState(avocado);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    setRandomImage()
  }, [])

  function setRandomImage() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 2) setImage(grapes);
    if (randomNumber === 3) setImage(pizza);
  }

  function onAddToBasketClick() {
    console.log(product.name)
  }

  function onProductCardClick() {
    setShowDescription((prevState) => !prevState)
  }

  return (
    <div
      className="product-card"
      onClick={onProductCardClick}
    >
      <ProductDetails
        description={product.description}
        show={showDescription}
      />

      <img src={image} className="product-card__image" alt="Product" />
      <p className="product-card__name">{product.name}</p>
      <div className="flex-spacer"></div>
      <p className="product-card__price">£{product.price}</p>
      <button
        className="product-card__button"
        onClick={onAddToBasketClick}
      >
        Add to Basket
      </button>
    </div>
  )
}

export default ProductCard;