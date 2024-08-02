import React from 'react';
import './Basket.scss';
import BasketItem from './basket-item/BasketItem';
import { dummyData } from '../../dummy-data';

const Basket: React.FC<{onClose: () => void}> = ({onClose}) => {

  return (
    <>
      <div className="mask" onClick={onClose}/>
      <div className="basket">

        <h4>Your Basket</h4>
        <div
          className="basket__close"
          onClick={onClose}
        >X</div>        
        <BasketItem product={dummyData[0]} />
        
      </div>
    </>
  )
}

export default Basket;