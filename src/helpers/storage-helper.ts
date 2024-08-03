import { Product } from "../App";

const KEY = 'cognito-shopping-local-storage';

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