import type { Product } from '@/dto/Product';

export const PRODUCTS: Product[] = [
  {
    id: 'p-001',
    name: 'wireless mouse pro',
    brand: 'acme',
    quantity: 35,
    price: { amount: 29_99, currency: 'USD' },
    isActive: true,
    specs: { color: 'gray' },
  },
  {
    id: 'p-002',
    name: 'mechanical keyboard tkl',
    brand: 'keyworld',
    quantity: 0,
    price: { amount: 89_99, currency: 'USD' },
    isActive: false,
  },
];