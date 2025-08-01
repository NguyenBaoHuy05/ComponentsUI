import React from "react";

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  color = "#2563eb",
}) => {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className="w-full max-w-xs h-3 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all"
        style={{ width: `${percent}%`, backgroundColor: color }}
        aria-valuenow={value}
        aria-valuemax={max}
        aria-valuemin={0}
        role="progressbar"
      />
    </div>
  );
};
