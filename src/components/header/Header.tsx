import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.png';
import { ReactComponent as Basket  } from '../../assets/basket.svg';

const Header: React.FC<{onBasketClick: () => void}> = ({onBasketClick}) => {

  return (
    <div className="header">
      <img
        src={logo}
        className="header__logo"
        alt="Logo"
      />
      <Basket onClick={onBasketClick} />
    </div>
  )
}

export default Header;