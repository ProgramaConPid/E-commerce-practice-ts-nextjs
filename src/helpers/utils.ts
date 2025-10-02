import {
  Product,
  User,
  Car,
  UserRegistered,
} from "@/interfaces/main";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { getComments } from "@/services/comments";

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
    imageURL:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Smartphone X",
    brand: "PhoneCorp",
    price: 800,
    quantity: 25,
    currency: "USD",
    category: "Electronics",
    isActive: true,
    imageURL:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    imageURL:
      "https://id-preview--cd435d9a-6844-44e6-8351-279acb86b107.lovable.app/assets/headphones-CHt0pv2S.jpg",
  },
  {
    name: "Office Chair",
    brand: "ComfortSeating",
    price: 450000,
    quantity: 12,
    currency: "COP",
    category: "Furniture",
    isActive: true,
    imageURL:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Gaming Mouse",
    brand: "ClickPro",
    price: 70,
    quantity: 30,
    currency: "USD",
    category: "Accessories",
    isActive: true,
    dimensions: { width: 6, height: 12 },
  },
  {
    name: "4K Monitor",
    brand: "VisionTech",
    price: 350,
    quantity: 18,
    currency: "USD",
    category: "Electronics",
    isActive: true,
    imageURL:
      "https://images.unsplash.com/photo-1547658718-1cdaa0852790?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Running Shoes",
    brand: "SportFlex",
    price: 250000,
    quantity: 50,
    currency: "COP",
    category: "Clothing",
    isActive: true,
  },
  {
    name: "Backpack",
    brand: "UrbanPack",
    price: 60,
    quantity: 20,
    currency: "USD",
    category: "Accessories",
    isActive: true,
  },
  {
    name: "Smartwatch",
    brand: "TimeTrack",
    price: 200,
    quantity: 15,
    currency: "USD",
    category: "Electronics",
    isActive: false,
    imageURL:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bluetooth Speaker",
    brand: "SoundWave",
    price: 90,
    quantity: 35,
    currency: "USD",
    category: "Audio",
    isActive: true,
  },
  {
    name: "Desk Lamp",
    brand: "BrightLight",
    price: 120000,
    quantity: 22,
    currency: "COP",
    category: "Furniture",
    isActive: true,
  },
  {
    name: "Gaming Keyboard",
    brand: "KeyMaster",
    price: 110,
    quantity: 28,
    currency: "USD",
    category: "Accessories",
    isActive: true,
  },
  {
    name: "Mountain Bike",
    brand: "RideOn",
    price: 1500000,
    quantity: 5,
    currency: "COP",
    category: "Sports",
    isActive: true,
    dimensions: { width: 150, height: 100 },
  },
  {
    name: "Coffee Maker",
    brand: "BrewMaster",
    price: 300000,
    quantity: 16,
    currency: "COP",
    category: "Appliances",
    isActive: true,
  },
  {
    name: "T-Shirt",
    brand: "CottonWear",
    price: 25,
    quantity: 100,
    currency: "USD",
    category: "Clothing",
    isActive: true,
  },
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
      country: "USA",
    },
  },
  {
    name: "Carlos Ramírez",
    email: "carlos.ramirez@example.com",
    age: 35,
    address: {
      street: "Av. Siempre Viva 742",
      city: "Bogotá",
      country: "Colombia",
    },
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
      country: "Canada",
    },
  },
  {
    name: "David Kim",
    email: "david.kim@example.com",
    age: 40,
    address: {
      street: "789 King St",
      city: "Seoul",
      country: "South Korea",
    },
  },
  {
    name: "Emma Thompson",
    email: "emma.thompson@example.com",
    age: 31,
    address: {
      street: "10 Downing St",
      city: "London",
      zipCode: "SW1A 2AA",
      country: "UK",
    },
  },
];

// Array of users registered
export const usersRegistered: UserRegistered[] = [
  { username: "Camilo", password: "cami1234" },
  { username: "Pedro", password: "pepe1234" },
  { username: "Daniela12", password: "danipro" },
  { username: "piton0520", password: "jackson123" },
];

// US-W2 Class UserStore - CRUD Methods
// Class UserStore
export class UserStore {
  // -- Methods CRUD --

  // List Users
  async getComments() {
    const data = await getComments() 
    return data;
  }

  // Find User By name
  findByName(username: string, listUsers: UserRegistered[]) {
    const userFound = listUsers.find((user) => user.username == username);

    if (userFound) {
      return `User ${username} found succesfully of the list ✅`;
    } else {
      return `User ${username} was not found of the list ✖️`;
    }
  }

  // Create a new user
  createUser(username: string, password: string, listUsers: UserRegistered[]) {
    const newUser: UserRegistered = {
      username: username,
      password: password,
    };

    if (!username || !password) {
      return `Error creating user, enter username and password`;
    }

    listUsers.push(newUser);
  }

  // Update an User
  updateUser(listUsers: UserRegistered[]) {
    const username = window.prompt("Enter the username to update");
    const userFound = listUsers.findIndex((user) => user.username == username);

    if (!username || userFound === -1) {
      return `Error, the user ${username} does not exist on the list of users.`;
    }

    const newUserName = window.prompt("Enter the new user name");
    const newPassword = window.prompt("Enter the new password");

    if (!newUserName || !newPassword) {
      return `Error updating the User ${username}, Enter a valid username and password`;
    }

    const userUpdated = {
      oldUsername: listUsers[userFound].username || "",
      username: newUserName,
      password: newPassword,
    };

    listUsers[userFound].username = newUserName;
    listUsers[userFound].password = newPassword;
    return `The user ${userUpdated.oldUsername} was updated succesfully to ${userUpdated.username} ✅`;
  }

  // Delete an user
  removeUser(listUsers: UserRegistered[]) {
    const username = window.prompt("Enter the username to delete");
    if (!username) {
      return "Error, enter a valid username.";
    }

    const userFound = listUsers.findIndex((user) => user.username == username);
    if (userFound === -1) {
      return `The user entered ${username} does not exist on the list of users.`;
    }

    const confirmDeleteUser = window.confirm(
      `The user ${username} was found succesfully, are you sure want to delete?`
    );

    if (confirmDeleteUser) {
      const removedUser = listUsers.splice(userFound, 1)[0];
      return `The user ${removedUser.username} was deleted succesfully from the list of users`;
    } else {
      return `The user ${username} was not deleted from the list of users.`;
    }
  }
}

// Notifications Toastify
type notification = "error" | "success" | "warning" | "info";
const defaultTime: number = 5000;
export const handleNotification = (
  text: string,
  type: notification,
  closeTime?: number
) => {
  switch (type) {
    case "success":
      toast.success(text, {
        position: "top-right",
        autoClose: closeTime ?? defaultTime,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      break;

    case "error":
      toast.error(text, {
        position: "top-right",
        autoClose: closeTime ?? defaultTime,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      break;

    case "warning":
      toast.warn(text, {
        position: "top-right",
        autoClose: closeTime ?? defaultTime,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      break;

    case "info":
      toast.info(text, {
        position: "top-right",
        autoClose: closeTime ?? defaultTime,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      break;

    default:
      break;
  }
};

// Custom Alerts
export const showErrorAlert = () => {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "Cool",
  });
};

export const showSuccessAlert = () => {
  Swal.fire({
    title: "Success!",
    text: "Product saved successfully",
    icon: "success",
    confirmButtonText: "Okay",
  });
};

export const showInfoAlert = () => {
  Swal.fire({
    title: "The Internet?",
    text: "That thing is still around?",
    icon: "question",
  });
};

export const showConfirmAlert = () => {
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
};
