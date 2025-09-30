// US-W3 -ButtonComponent
import React from "react";
import { ButtonProps } from "@/interfaces/main";

export type Variant = "primary" | "secondary" | "outline" | "danger";

export const Button = ({
  text,
  variant,
  disabled = false,
  onClick,
  leftIcon,
  rightIcon,
  size,
}: ButtonProps) => {
  function getSize() {
    switch (size) {
      case "sm":
        return "sm"
      case "md":
        return "md"
      case "lg":
        return "lg"
      default:
        return "md"
    }
  }

  return (
    <button
      onClick={onClick}
      className={`btn text-white text-center w-full ${variant ?? "primary"} ${getSize()} p-2 border-0 rounded-[.6rem] flex items-center justify-center gap-3 cursor-pointer mt-3 ${
        disabled ? "disabled" : ""
      }`}
      disabled={disabled}
    >
      {leftIcon}
      <span>{disabled ? "Deshabilitado" : text}</span>
      {rightIcon}
    </button>
  );
};
