import React from "react";

interface AlertProps {
  type?: "info" | "success" | "warning" | "error";
  children: React.ReactNode;
}

const typeStyles = {
  info: "bg-blue-100 text-blue-800 border-blue-300",
  success: "bg-green-100 text-green-800 border-green-300",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
  error: "bg-red-100 text-red-800 border-red-300",
};

export const Alert: React.FC<AlertProps> = ({ type = "info", children }) => (
  <div
    className={`border-l-4 p-4 rounded ${typeStyles[type]} my-2`}
    role="alert"
  >
    {children}
  </div>
);
