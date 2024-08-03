import React, { useContext } from 'react';
import './Header.scss';
import logo from '../../assets/logo.png';
import { ReactComponent as Basket  } from '../../assets/basket.svg';
import { BasketContext } from '../../context/BasketProvider';

const Header: React.FC<{onBasketClick: () => void}> = ({onBasketClick}) => {

  const { basket } = useContext(BasketContext);

  return (
    <div className="header">
      <img
        src={logo}
        className="header__logo"
        alt="Logo"
      />
      <div
        className="header__basket-cont"
        onClick={onBasketClick}
      >
        <p>{basket.length}</p>
        <Basket />
      </div>
    </div>
  )
}

export default Header;