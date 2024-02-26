/**
 * Custom hook to fetch product data
 * @returns {Object} An object containing products or error details
 */
export const useProducts = async () => {
    const { data, error } = await useFetch('/api/adopt/product-data')
    // Error Message!
    if (error.value) {
        console.error('Error in useProducts')
        throw createError({
            ...error.value,
            statusMessage: `Couldn't fetch product details.`,
        })
    }

    const { allProducts, someProducts } = data.value
    return { allProducts, someProducts }
}
