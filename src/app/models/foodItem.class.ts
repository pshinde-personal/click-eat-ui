export class FoodItemClassResponse {
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
}

export class FoodItemsClassResponse {
  success: boolean
  data: FoodItemClassResponse
  pagination: any
  count: number
}

const foodCategories = [
  "Starters",
  "Indian",
  "Mexicon",
  "Chinese",
  "Desserts",
  "Quick Bites",
  "Beverages",
  "Thalis",
  "Breakfasts",
  "Mughlai",
  "Biryani",
  "North Indian",
  "South Indian",
  "Asian",
  "Sea Food",
  "Mithai",
  "other",
]