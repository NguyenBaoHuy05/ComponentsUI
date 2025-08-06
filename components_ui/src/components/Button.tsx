import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "link";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const base =
    "px-4 py-2 rounded font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400",
    ghost: "bg-transparent text-white hover:bg-gray-900 focus:ring-gray-400",
    outline:
      "border border-gray-300 text-gray-500 hover:bg-gray-100 focus:ring-gray-900 hover:text-gray-900",
    link: "text-blue-600 hover:text-blue-800 focus:ring-blue-500 underline",
  };
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
