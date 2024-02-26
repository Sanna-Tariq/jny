import type { Products } from '@/types/products'
import { products as allProducts } from '@/product.json'
allProducts as Products
//
const fractionOfThePetsArray = (inputItem, numberOfItems) => {
  return inputItem
    .map((item) => ({
      ...item,
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort)
    // .slice(0, Math.floor(inputItem.length * fraction))
    .slice(0, numberOfItems)
}

export default defineEventHandler(async (/*event*/) => {
  const someProducts: Products = fractionOfThePetsArray(allProducts, 4)
  return {
    allProducts,
    someProducts,
  }
})
