import React from "react";

interface BadgeProps {
  color?: "gray" | "blue" | "green" | "red" | "yellow";
  children: React.ReactNode;
}

const colorMap = {
  gray: "bg-gray-200 text-gray-800",
  blue: "bg-blue-100 text-blue-800",
  green: "bg-green-100 text-green-800",
  red: "bg-red-100 text-red-800",
  yellow: "bg-yellow-100 text-yellow-800",
};

export const Badge: React.FC<BadgeProps> = ({ color = "gray", children }) => (
  <span
    className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${colorMap[color]}`}
  >
    {children}
  </span>
);
