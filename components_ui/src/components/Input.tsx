import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = "",
  ...props
}) => (
  <div className="flex flex-col gap-1 w-full max-w-xs">
    {label && <label className="font-medium text-sm mb-1">{label}</label>}
    <input
      className={`px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
        error ? "border-red-500" : "border-gray-300"
      } ${className}`}
      {...props}
    />
    {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
  </div>
);
