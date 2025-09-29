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
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`btn text-white text-center w-full ${
        variant ?? "primary"
      } p-2 border-0 rounded-[.6rem] flex items-center justify-center gap-3 cursor-pointer mt-3 ${
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
