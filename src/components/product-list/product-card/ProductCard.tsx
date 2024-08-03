import React, { MouseEvent, useContext, useEffect, useState } from 'react';
import './ProductCard.scss';
import avocado from '../../../assets/avocado.png';
import grapes from '../../../assets/grapes.png';
import pizza from '../../../assets/pizza.png';
import { ReactComponent as Checkmark } from '../../../assets/checkmark.svg';
import ProductDetails from './product-details/ProductDetails';
import { BasketContext } from '../../../context/BasketProvider';
import { Product } from '../ProductList';

const ProductCard: React.FC<{product: Product}> = ({product}) => {

  // ProductCard is it's own component as it is reused many times, helping to keep the code DRY.

  const {addToBasket} = useContext(BasketContext);
  const [image, setImage] = useState(avocado);
  const [showDescription, setShowDescription] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);

  useEffect(() => {
    setRandomImage();
  }, [])

  function setRandomImage() {
    // A small function to select an image from a group of 3.
    // Implemented to add placeholder images to the site.
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 2) setImage(grapes);
    if (randomNumber === 3) setImage(pizza);
  }

  function onAddToBasketClick(event: MouseEvent<HTMLButtonElement>) {
    event?.stopPropagation();
    setAddSuccess(true);
    setTimeout(() => setAddSuccess(false), 1000);
    addToBasket(product);
    setShowDescription(false);
  }

  function onProductCardClick() {
    setShowDescription((prevState) => !prevState);
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
        className={
          addSuccess
            ? "primary-btn primary-btn--success"
            : "primary-btn"
          }
        onClick={(event) => onAddToBasketClick(event)}
      >
        {addSuccess && (
          <Checkmark
            style={{
              fill: "white",
              width: "20px"
            }}
          />
        )}
        {addSuccess ? "Added to Basket" : "Add to Basket"}
      </button>
    </div>
  )
}

export default ProductCard;