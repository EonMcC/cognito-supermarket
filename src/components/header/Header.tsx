import React, { useContext, useEffect, useState } from 'react';
import './Header.scss';
import logo from '../../assets/logo.png';
import { ReactComponent as Basket  } from '../../assets/basket.svg';
import { BasketContext } from '../../context/BasketProvider';
import { calculateTotal } from '../../helpers/app-helpers';

const Header: React.FC<{onBasketClick: () => void}> = ({onBasketClick}) => {

  const { basket } = useContext(BasketContext);
  const [total, setTotal] = useState('');

  useEffect(() => {
    setTotal(calculateTotal(basket))
  }, [basket])

  return (
    <div className="header">
      <img
        src={logo}
        className="header__logo"
        alt="Logo"
      />
      
      <h1>Cognito Supermarkets</h1>

      <div
        className="header__basket-cont"
        onClick={onBasketClick}
      >
        {+total > 0 && <p>£{total}</p>}
        <Basket stroke="white" fill="transparent" />
      </div>
    </div>
  )
}

export default Header;