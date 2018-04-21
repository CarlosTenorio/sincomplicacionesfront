
export interface ICountry {
  id: number;
  name: string;
  image: string;
}

export interface IExpansion {
  id: number
  title: string;
  image?: string;
}

export enum ShippingType {
  Purchase = 0,
  Sale = 1
}

export interface IShipping {
  date: string;
  type: ShippingType;
  costs: number;
  cards: ICard[];
}

export interface ICard {
  country: ICountry;
  expansion: IExpansion;
  description: string;
  image: string;
  price: number;
  quantity: number;
  shipping: IShipping;
  title: string;
}
