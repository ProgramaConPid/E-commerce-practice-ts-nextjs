type Currency = "USD" | "COP";
type Dimensions = {
  width: number,
  height: number,
}

// Interface for Product
interface Product {
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
interface User {
  name: string,
  email: string,
  age: number,
  address: Address,
}

// Array of Products
export const products: Product[] = [
  {
    name: "Laptop Pro 15",
    brand: "TechBrand",
    price: 1200,
    quantity: 10,
    currency: "USD",
    category: "Electronics",
    isActive: true,
    dimensions: { width: 35, height: 24 },
    imageURL: "https://id-preview--cd435d9a-6844-44e6-8351-279acb86b107.lovable.app/assets/laptop-pro-yK_00TaC.jpg"
  },
  {
    name: "Smartphone X",
    brand: "PhoneCorp",
    price: 800,
    quantity: 25,
    currency: "USD",
    category: "Electronics",
    isActive: true,
    imageURL: "https://id-preview--cd435d9a-6844-44e6-8351-279acb86b107.lovable.app/assets/smartphone-RtKBCjW5.jpg"
  },
  {
    name: "Wireless Headphones",
    brand: "SoundMax",
    price: 150,
    quantity: 40,
    currency: "USD",
    category: "Audio",
    isActive: true,
    dimensions: { width: 18, height: 20 },
    imageURL: "https://id-preview--cd435d9a-6844-44e6-8351-279acb86b107.lovable.app/assets/headphones-CHt0pv2S.jpg"
  },
  {
    name: "Office Chair",
    brand: "ComfortSeating",
    price: 450000,
    quantity: 12,
    currency: "COP",
    category: "Furniture",
    isActive: true,
    imageURL: "https://example.com/office-chair.jpg"
  },
  {
    name: "Gaming Mouse",
    brand: "ClickPro",
    price: 70,
    quantity: 30,
    currency: "USD",
    category: "Accessories",
    isActive: true,
    dimensions: { width: 6, height: 12 }
  },
  {
    name: "4K Monitor",
    brand: "VisionTech",
    price: 350,
    quantity: 18,
    currency: "USD",
    category: "Electronics",
    isActive: true,
    imageURL: "https://example.com/4k-monitor.jpg"
  },
  {
    name: "Running Shoes",
    brand: "SportFlex",
    price: 250000,
    quantity: 50,
    currency: "COP",
    category: "Clothing",
    isActive: true
  },
  {
    name: "Backpack",
    brand: "UrbanPack",
    price: 60,
    quantity: 20,
    currency: "USD",
    category: "Accessories",
    isActive: true
  },
  {
    name: "Smartwatch",
    brand: "TimeTrack",
    price: 200,
    quantity: 15,
    currency: "USD",
    category: "Electronics",
    isActive: false,
    imageURL: "https://example.com/smartwatch.jpg"
  },
  {
    name: "Bluetooth Speaker",
    brand: "SoundWave",
    price: 90,
    quantity: 35,
    currency: "USD",
    category: "Audio",
    isActive: true
  },
  {
    name: "Desk Lamp",
    brand: "BrightLight",
    price: 120000,
    quantity: 22,
    currency: "COP",
    category: "Furniture",
    isActive: true
  },
  {
    name: "Gaming Keyboard",
    brand: "KeyMaster",
    price: 110,
    quantity: 28,
    currency: "USD",
    category: "Accessories",
    isActive: true
  },
  {
    name: "Mountain Bike",
    brand: "RideOn",
    price: 1500000,
    quantity: 5,
    currency: "COP",
    category: "Sports",
    isActive: true,
    dimensions: { width: 150, height: 100 }
  },
  {
    name: "Coffee Maker",
    brand: "BrewMaster",
    price: 300000,
    quantity: 16,
    currency: "COP",
    category: "Appliances",
    isActive: true
  },
  {
    name: "T-Shirt",
    brand: "CottonWear",
    price: 25,
    quantity: 100,
    currency: "USD",
    category: "Clothing",
    isActive: true
  }
];

// Array of Users
export const users: User[] = [
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 28,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA"
    }
  },
  {
    name: "Carlos Ramírez",
    email: "carlos.ramirez@example.com",
    age: 35,
    address: {
      street: "Av. Siempre Viva 742",
      city: "Bogotá",
      country: "Colombia"
    }
  },
  {
    name: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    age: 22,
    address: {
      street: "456 Maple Ave",
      city: "Toronto",
      state: "ON",
      zipCode: "M4B 1B4",
      country: "Canada"
    }
  },
  {
    name: "David Kim",
    email: "david.kim@example.com",
    age: 40,
    address: {
      street: "789 King St",
      city: "Seoul",
      country: "South Korea"
    }
  },
  {
    name: "Emma Thompson",
    email: "emma.thompson@example.com",
    age: 31,
    address: {
      street: "10 Downing St",
      city: "London",
      zipCode: "SW1A 2AA",
      country: "UK"
    }
  }
];

