import React from "react";

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [show, setShow] = React.useState(false);
  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      tabIndex={0}
    >
      {children}
      {show && (
        <span className="absolute z-10 left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-gray-800 text-white text-xs whitespace-nowrap shadow-lg">
          {content}
        </span>
      )}
    </span>
  );
};
