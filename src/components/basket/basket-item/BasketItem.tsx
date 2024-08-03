import React, { useContext } from 'react';
import './BasketItem.scss';
import { Product } from '../../../App';
import { ReactComponent as Trash  } from '../../../assets/trash.svg';
import { BasketContext } from '../../../context/BasketProvider';

const BasketItem: React.FC<{product: Product, index: number}> = ({product, index}) => {

  const { basket, removeFromBasket } = useContext(BasketContext);
  

  return (
    <div className="basket-item">
      <div>
        <p>{product.name}</p>
        <p className="basket-item__price">£{product.price}</p>
      </div>
      <Trash
        className="basket-item__delete"
        onClick={() => removeFromBasket(index)}
      />
    </div>
  )
}

export default BasketItem;