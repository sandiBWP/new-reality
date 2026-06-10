import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type InputProps = {
  error?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "rounded-sm border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors",
          "placeholder:text-ink-mute",
          error ? "border-error focus:border-error" : "border-line focus:border-rust",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

type SelectProps = {
  options: { value: string; label: string }[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "rounded-sm border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-rust",
          className,
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  },
);
Select.displayName = "Select";
