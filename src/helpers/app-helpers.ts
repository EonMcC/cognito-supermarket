import { Product } from "../components/product-list/ProductList"

export function calculateTotal(basket: Product[]) {
  return basket.reduce((total, cur) => {
    return total + cur.price
  }, 0).toFixed(2)
}