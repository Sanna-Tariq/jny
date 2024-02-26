export const useProduct = async (productId: number) => {
  const { data: product, error } = await useFetch(`/api/adopt/product-data/${productId}`)
  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch pet profile for id ${productId}.`,
    })
  }

  const fetchProduct = () => {
    return product.value
  }

  return { product, fetchProduct }
}
