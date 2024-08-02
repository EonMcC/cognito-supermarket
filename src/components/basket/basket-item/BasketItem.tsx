import React from 'react';
import './BasketItem.scss';
import { Product } from '../../../App';
import { ReactComponent as Trash  } from '../../../assets/trash.svg';

const BasketItem: React.FC<{product: Product}> = ({product}) => {

  return (
    <div className="basket-item">
      <p>{product.name}</p>
      <div className="basket-item__count"></div>
      <Trash className="basket-item__delete" />
    </div>
  )
}

export default BasketItem;