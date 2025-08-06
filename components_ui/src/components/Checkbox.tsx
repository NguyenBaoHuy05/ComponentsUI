"use client";
import React from "react";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

export function Checkbox({
  label,
  checked,
  onChange,
  className,
  ...props
}: CheckboxProps) {
  return (
    <label
      className={`inline-flex items-center cursor-pointer gap-2 p-2 ${className}`}
    >
      <span className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer w-4 h-4 border border-gray-400 rounded-sm bg-white checked:bg-red-300 focus:outline-none transition duration-150"
          {...props}
        />
        <span className="pointer-events-none absolute left-0 top-0 w-4 h-4 flex items-center justify-center">
          <svg
            className="w-4 h-4 text-black opacity-0 peer-checked:opacity-100 transition"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <polyline points="5 10 9 14 15 6" />
          </svg>
        </span>
      </span>
      {label && <span className="select-none text-gray-800">{label}</span>}
    </label>
  );
}
