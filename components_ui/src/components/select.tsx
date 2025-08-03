"use client";
import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  ReactNode,
  ButtonHTMLAttributes,
  LiHTMLAttributes,
} from "react";

// --- Context Setup ---
interface SelectContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  value: string;
  setValue: (value: string) => void;
}

const SelectContext = createContext<SelectContextProps | undefined>(undefined);

const useSelectContext = () => {
  const ctx = useContext(SelectContext);
  if (!ctx) throw new Error("Select context must be used within <Select>");
  return ctx;
};

// --- Wrapper ---
interface SelectProps {
  children: ReactNode;
  defaultValue?: string;
}

export function Select({ children, defaultValue = "" }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const contextValue = useMemo(
    () => ({ open, setOpen, value, setValue }),
    [open, value]
  );

  return (
    <SelectContext.Provider value={contextValue}>
      <div className="relative min-w-[80px] rounded-md border border-gray-800 bg-white">
        {children}
      </div>
    </SelectContext.Provider>
  );
}

// --- Trigger Button ---
interface SelectTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function SelectTrigger({ children, ...props }: SelectTriggerProps) {
  const { open, setOpen } = useSelectContext();
  return (
    <button
      type="button"
      aria-haspopup="listbox"
      aria-expanded={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span className="flex items-center justify-center h-full">
        <span className="truncate leading-none">{children}</span>
        <svg
          className={`w-4 h-4 ml-2 flex-shrink-0 transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
    </button>
  );
}

// --- Dropdown Content ---
interface SelectContentProps {
  children: ReactNode;
}

export function SelectContent({ children }: SelectContentProps) {
  const { open } = useSelectContext();
  if (!open) return null;

  return (
    <ul
      className="absolute mt-1 left-0 w-full max-h-60 min-w-[150px] rounded-md border border-gray-200 bg-white shadow-lg z-50 overflow-auto"
      role="listbox"
      tabIndex={-1}
    >
      {children}
    </ul>
  );
}

// --- Selectable Item ---
interface SelectItemProps extends LiHTMLAttributes<HTMLLIElement> {
  value: string;
  children: ReactNode;
}

export function SelectItem({ value, children, ...props }: SelectItemProps) {
  const { value: selectedValue, setValue, setOpen } = useSelectContext();
  const selected = selectedValue === value;

  return (
    <li
      role="option"
      aria-selected={selected}
      onClick={() => {
        setValue(value);
        setOpen(false);
      }}
      className={`px-4 py-2 cursor-pointer rounded-md select-none ${
        selected
          ? "bg-cyan-100 text-cyan-900 font-semibold"
          : "hover:bg-cyan-50"
      }`}
      {...props}
    >
      {children}
    </li>
  );
}

// --- Selected Value Renderer ---
export function SelectValue() {
  const { value } = useSelectContext();
  return <span className="truncate">{value}</span>;
}
