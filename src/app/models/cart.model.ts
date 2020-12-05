export interface Cart {
  name: string
  details: string
  slug: string
  price: number
  isSpecial: boolean
  discount: number
  domain: Array<string>
  category: Array<string>
  rating: number
  photo: string
  restaurant: string
  user: string
  count?: number
}