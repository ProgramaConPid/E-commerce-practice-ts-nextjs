import { Variant } from "@/components/Button";
import { Status } from "@/components/Badge";
import { AvailableColors } from "@/components/Card";
import { JSX } from "react";

type Currency = "USD" | "COP";
type Dimensions = {
  width: number,
  height: number,
}

// Interface for Product - HU M1-S1
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

// Interface for Address - HU M1-S1
interface Address {
  street: string,
  city: string,
  state?: string,
  zipCode?: string,
  country: string,
}

// Interface for User - HU M1-S1
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

// Interface for user registered
export interface UserRegistered {
  username: string,
  password: string
}

// Interface for CardProps
export interface CardProps {
  text: string;
  secondText?: string;
  textBg: AvailableColors;
  cardBg: AvailableColors;
  imageURL: string;
  btnProps: ButtonProps
  badgeProps: BadgeProps
}

// Interface for ButtonProps
export interface ButtonProps {
  text: string;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onClick?: () => void;
}

// Interface for BadgeProps
export interface BadgeProps {
  label: string;
  status?: Status;
  icon?: JSX.Element;
  title?: string;
}


