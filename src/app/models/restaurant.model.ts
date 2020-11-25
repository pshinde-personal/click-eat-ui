import { Data } from '@angular/router';

export interface RestaurantResponse {
  success: string,
  pagination: Object,
  data: Array<Restaurant>,
  count: number
}

export interface Restaurant {
  name: string,
  details: string,
  email: string,
  location: {
    type: string,
    coordinates: Array<number>,
    country: string,
    city: string,
    formattedAddress: string,
    street: string,
    zipcode: number
  },
  lodging: boolean,
  phone: string,
  photo: string,
  services: Array<string>,
  slug: string,
  speciality: Array<string>,
  createdAt: Date,
  _id: string,
  owner: {
    role: string,
    createdAt: Data,
    email: string,
    name: string,
    _id: string
  }
}