import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Product } from '../components/product-list/ProductList';
import { loadFromLocalStorage, saveToLocalStorage } from '../helpers/storage-helper';

// I opted to use useContext for state management as there is only a little amount of state to track.
// I usually use REDUX for state management, but it felt like overkill for this site.

type BasketType = {
  basket: Product[];
  setBasket: React.Dispatch<React.SetStateAction<Product[]>>;
  addToBasket: (product: Product) => void;
  removeFromBasket: (index: number) => void;
}

const basketState = {
  basket: [],
  setBasket: () => [],
  addToBasket: () => [],
  removeFromBasket: () => []
}

const BasketContext = createContext<BasketType>(basketState);

const BasketProvider: React.FC<{children: ReactNode}> = ({children}) => {
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