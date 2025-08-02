import React from "react";

interface BadgeProps {
  color?:
    | "gray"
    | "blue"
    | "green"
    | "red"
    | "yellow"
    | "purple"
    | "black"
    | "white";
  children: React.ReactNode;
  className?: string;
}

const colorMap = {
  gray: "bg-gray-200 text-gray-800 border-gray-300",
  blue: "bg-blue-100 text-blue-800 border-blue-300",
  green: "bg-green-100 text-green-800 border-green-300",
  red: "bg-red-100 text-red-800 border-red-300",
  yellow: "bg-yellow-100 text-yellow-800 border-yellow-300",
  purple: "bg-purple-100 text-purple-800 border-purple-300",
  black: "bg-black text-white border-gray-700",
  white: "bg-white text-black",
};

export const Badge: React.FC<BadgeProps> = ({
  color = "gray",
  className,
  children,
}) => (
  <span
    className={`border inline-block px-2 py-0.5 rounded text-xs font-semibold ${colorMap[color]} ${className}`}
  >
    {children}
  </span>
);
