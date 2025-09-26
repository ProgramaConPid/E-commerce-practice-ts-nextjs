import React, { JSX } from "react";

export type Variant = "primary" | "secondary" | "outline" | "danger";
interface ButtonProps {
  text: string;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onClick?: () => void;
}

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
