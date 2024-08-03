import { Product } from "../App";

export function calculateTotal(basket: Product[]) {
  return basket.reduce((total, cur) => {
    return total + cur.price
  }, 0).toFixed(2)
}