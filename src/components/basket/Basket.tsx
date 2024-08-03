import React, { useContext } from 'react';
import './Basket.scss';
import BasketItem from './basket-item/BasketItem';
import { BasketContext } from '../../context/BasketProvider';
import { Product } from '../../App';

const Basket: React.FC<{onClose: () => void}> = ({onClose}) => {

  const { basket } = useContext(BasketContext);

  return (
    <>
      <div className="mask" onClick={onClose}/>
      <div className="basket">

        <h4>Your Basket</h4>
        <div
          className="basket__close"
          onClick={onClose}
        >X</div>

        {basket.map((product: Product, index: number) => {
          return (
            <BasketItem key={String(product.id) + String(index)} product={product} index={index}/>
          )
        })}      
        
      </div>
    </>
  )
}

export default Basket;