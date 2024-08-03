import React, { useContext, useEffect, useState } from 'react';
import './Basket.scss';
import BasketItem from './basket-item/BasketItem';
import { BasketContext } from '../../context/BasketProvider';
import { Product } from '../../App';
import { calculateTotal } from '../../helpers/app-helpers';

const Basket: React.FC<{onClose: () => void}> = ({onClose}) => {

  const { basket } = useContext(BasketContext);
  const [total, setTotal] = useState('');

  useEffect(() => {
    setTotal(calculateTotal(basket))
  }, [basket])

  function onCheckoutClick() {
    window.alert("Coming Soon!")
  }

  return (
    <>
      <div className="mask" onClick={onClose}/>
      <div className="basket">

        <h2>Your Basket</h2>
        <div
          className="basket__close"
          onClick={onClose}
        >X</div>

        {basket.map((product: Product, index: number) => {
          return (
            <BasketItem key={String(product.id) + String(index)} product={product} index={index}/>
          )
        })}

        <h3 className="basket__total">
          Total: £{total}
        </h3>

        <button
          className="primary-btn"
          onClick={onCheckoutClick}
        >
          Checkout  
        </button> 
        
      </div>
    </>
  )
}

export default Basket;