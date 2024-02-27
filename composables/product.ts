import type { Product, Products } from '@/types/product'
import { products } from '@/product.json'
products as Products
export const useProduct = async (productId: number) => {
  const product: Maybe<Product> = products.find(
    (item) => +item.id === +productId,
  )
  if (!product) {
    throw createError({
      statusCode: 404,
      message: 'Product not found.',
    })
  }
  const fetchProduct = () => {
    return product
  }
  return { product, fetchProduct }
}
