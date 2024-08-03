import { Product } from "../App";

export function calculateTotal(basket: Product[]) {
  const total = basket.reduce((total, cur) => {
    return total + cur.price
  }, 0).toFixed(2)

  console.log('total', total)
  return total;
}