type Currency = "USD" | "COP";
type Dimensions = {
  width: number,
  height: number,
}

// Interface for Product
export interface Product {
  name: string,
  brand: string,
  price: number,
  quantity: number,
  currency: Currency,
  category: string,
  isActive: boolean,
  dimensions?: Dimensions,
  imageURL?: string
}

// Interface for Address
interface Address {
  street: string,
  city: string,
  state?: string,
  zipCode?: string,
  country: string,
}

// Interface for User
export interface User {
  name: string,
  email: string,
  age: number,
  address: Address,
}

// Interface for Car
export interface Car {
  model: string,
  brand: string,
  year: number,
  isElectric: boolean,
  mileage?: number,
  color?: string,
}


