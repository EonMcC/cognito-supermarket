import { Product } from "../components/product-list/ProductList";

const KEY = 'cognito-shopping-local-storage';

// These two functions are used to store the basket state in local storage so that the basket persists
// if the page is refreshed.

export const saveToLocalStorage = (basket: Product[]) => {
  try {
    localStorage.setItem(KEY, JSON.stringify([...basket]));
  } catch (e) {
    console.error(e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const basketStr = localStorage.getItem(KEY);
    return basketStr ? JSON.parse(basketStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};