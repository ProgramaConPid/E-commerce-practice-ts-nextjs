// US-W3 -BadgeComponent
import React from "react";
import { BadgeProps } from "@/interfaces/main";

export type Status = "success" | "warning" | "info" | "error" | "neutral";


export const Badge = ({ label, status, icon, title }: BadgeProps) => {
  const date = new Date();

  return (
    <div
      onClick={() =>
        title?.includes("posted") ? alert(`${title} ${date}`) : alert(title)
      }
      className={`badge ${status} text-center text-white flex items-center gap-3 justify-center h-max self-end p-2 rounded-[1.5rem] cursor-crosshair`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};
