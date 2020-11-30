import { Restaurant } from './restaurant.model';

export class RestaurantClass {
  constructor(){}

  public name: string = '';
  public details: string = '';
  public email: string = '';
  public address: string = '';
  public avgCost: number = 0;
  public lodging: boolean = false;
  public phone: string;
  public photo: string;
  public services: Array<string>  = [
  ];
  public speciality: Array<string> = [
  ];
  public owner: {
    role: string;
    createdAt: Date;
    email: string;
    name: string;
    _id: string
  }
}

export class RestaurantResponseClass {
  constructor(){}

  public name: string;
  public details: string;
  public email: string;
  public location: Location
  public avgCost: number;
  public lodging: boolean;
  public phone: string;
  public photo: string;
  public services: Array<string>
  public speciality: Array<string>
  public owner: string
}

class Location {
  public type: string
  public city: string
  public coordinates: Array<number>
  public country: number
  public zipcode: string
  public formattedAddress: string
  public street: string
}