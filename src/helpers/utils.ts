import { Product,User, Car, UserRegistered } from "@/interfaces/main";

// Array od Cars
export const arrayCars: Car[] = [
  {
    model: "Model S",
    brand: "Tesla",
    year: 2022,
    isElectric: true,
    mileage: 15000,
    color: "Red",
  },
  {
    model: "Mustang",
    brand: "Ford",
    year: 2020,
    isElectric: false,
    mileage: 30000,
    color: "Blue",
  },
  {
    model: "Civic",
    brand: "Honda",
    year: 2019,
    isElectric: false,
    mileage: 25000,
    color: "Black",
  },
];

// Array of Products
export const arrayProducts: Product[] = [
  {
    name: "Laptop Pro 15",
    brand: "TechBrand",
    price: 1200,
    quantity: 10,
    currency: "USD",
    category: "Electronics",
    isActive: true,
    dimensions: { width: 35, height: 24 },
    imageURL: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Smartphone X",
    brand: "PhoneCorp",
    price: 800,
    quantity: 25,
    currency: "USD",
    category: "Electronics",
    isActive: true,
    imageURL: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    imageURL: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    imageURL: "https://images.unsplash.com/photo-1547658718-1cdaa0852790?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    imageURL: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
export const arrayUsers: User[] = [
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

// Array of users registered
export const usersRegistered: UserRegistered[] = [
  {username: "Camilo", password: "cami1234"},
  {username: "Pedro", password: "pepe1234"},
  {username: "Daniela12", password: "danipro"},
  {username: "piton0520", password: "jackson123"}
]

// Class UserStore
export class UserStore {
  // -- Methods CRUD --

  // List Users
  getUsers(listUsers: UserRegistered[]) {
    const usersNames = listUsers.map((user, index) => {
      return `\n User #${index + 1} -> ${user.username}` 
    })

    return `${usersNames.join("")}`
  } 

  // Find User By name
  findByName(username: string, listUsers: UserRegistered[]) {
    const userFounded = listUsers.find((user) => user.username == username)

    if (userFounded) {
      return `User ${username} found succesfully of the list ✅`
    } else {
      return `User ${username} was not found of the list ✖️`
    }
  }

  // Create a new user
  createUser(username: string, password:string, listUsers: UserRegistered[]) {
    const newUser: UserRegistered = {
      username: username,
      password: password
    };

    if (!username || !password) {
      return `Error creating user, enter username and password`
    }

    listUsers.push(newUser)
    return `User ${username} has been created succesfully ✅`
  }

  // Remove an User
  updateUser(listUsers: UserRegistered[]) {
    const username = window.prompt("Enter the username to update")

    if (!username) {
      return `Error, you did not entered a valid username`
    }

    const userFound = listUsers.findIndex((user) => user.username == username);

    if (!userFound) {
      return `Error, the user entered does not exists on the list of users`
    }

    const newUserName = window.prompt("Enter the new user name");
    const newPassword = window.prompt("Enter the new password");

    if (!newUserName || !newPassword) {
      return `Error updating the User ${username}, Enter a valid username and password`
    }

    listUsers[userFound].username = newUserName;
    listUsers[userFound].password = newPassword;
  }
}