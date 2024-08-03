import React, { createContext, useEffect, useState } from 'react';
import { Product } from '../App';
import { loadFromLocalStorage, saveToLocalStorage } from '../helpers/storage-helper';

type BasketType = {
  basket: any[];
  setBasket: React.Dispatch<React.SetStateAction<any[]>>;
  addToBasket: any;
  removeFromBasket: any
}

const basketState = {
  basket: ['one'],
  setBasket: () => [],
  addToBasket: () => [],
  removeFromBasket: () => []
}

const BasketContext = createContext<BasketType>(basketState);

const BasketProvider: React.FC<{children: any}> = ({children}) => {
  const [basket, setBasket] = useState<Product[]>([]);

  useEffect(() => {
    const localStorageData = loadFromLocalStorage();
    if (localStorageData) setBasket(localStorageData);
  }, [])

  useEffect(() => {
    saveToLocalStorage(basket)
  }, [basket])

  function addToBasket(product: Product) {
    setBasket((prevState) => [
      ...prevState,
      product
    ])
  }

  function removeFromBasket(index: number) {
    const basketCopy = [...basket];
    basketCopy.splice(index, 1);
    setBasket(basketCopy);
  }

  return (
    <BasketContext.Provider value={{ basket, setBasket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  )
}

export { BasketProvider, BasketContext };