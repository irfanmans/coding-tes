import { useState } from "react";
import type { TextareaFloatingProps } from "../Interface/MainInterface";

export default function TextareaFloating({
  id,
  label,
  name,
  value,
  onChange,
}: TextareaFloatingProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const isActive = isFocus || value.length > 0;

  return (
    <div className="relative">
      <textarea
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        rows={4}
        className="peer w-full resize-none bg-white border border-gray-300 rounded-xl px-4 pt-5.5 pb-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />

      <label
        htmlFor={id}
        className={`
          absolute left-3 transition-all duration-200 bg-white px-1
          ${
            isActive
              ? "top-2 text-xs text-blue-600"
              : "top-4 text-sm text-gray-400"
          }
        `}
      >
        {label}
      </label>
    </div>
  );
}
