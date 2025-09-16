export interface Price {
  amount: number;
  currency: 'COP' | 'USD';
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  quantity: number;
  price: Price;
  isActive: boolean;
  specs?: {
    weightGr?: number;
    color?: string;
  };
}