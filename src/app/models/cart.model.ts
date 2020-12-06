export class Cart {
  _id: string
  name: string
  details: string
  slug: string
  price: number
  quantity?: number
  isSpecial: boolean
  discount: number
  domain: Array<string>
  category: Array<string>
  rating: number
  photo: string
  restaurant: string
  user: string
  subtotal?: number = 0
  static total?: number = 0
  taxPrice?: number = 12
  deliveryFees: number = 79

  static setAddTotal(price: number) {
    return this.total += price
  }

  static setReoveFromTotal(price: number) {
    return this.total -= price
  }

  static getTotal() {
    return this.total
  }
}