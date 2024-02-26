import type { Product, Products } from '@/types/product'
import { products } from '@/product.json'
products as Products
export default defineEventHandler(async (event): Promise<Product> => {
  const { id } = event.context.params
  const product: Maybe<Product> = products.find((item) => +item.id === +id)
  if (!product) {
    throw createError({
      statusCode: 404,
      message: 'Product not found.',
    })
  }

  return product
})
