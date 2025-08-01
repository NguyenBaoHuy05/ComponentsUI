import React from "react";

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, description, children }) => (
  <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 w-full max-w-xs border border-gray-200 dark:border-gray-700">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    {children}
  </div>
);
