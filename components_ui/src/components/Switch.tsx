import React from "react";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const Switch: React.FC<SwitchProps> = ({ checked, onChange, label }) => (
  <label className="flex items-center gap-2 cursor-pointer select-none">
    <span className="text-sm font-medium">{label}</span>
    <span className="relative inline-block w-10 h-6">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />
      <span className="block w-full h-full bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors"></span>
      <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform peer-checked:translate-x-4"></span>
    </span>
  </label>
);
