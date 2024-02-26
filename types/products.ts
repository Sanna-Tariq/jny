import type { ImageOptimized } from './image'

export type Product = {
    id: number
    name: string
    material: string
    color: string,
    feature: string,
    price: string,
    country: string,
    imageOptimized?: ImageOptimized
}

export type Products = Product[]
