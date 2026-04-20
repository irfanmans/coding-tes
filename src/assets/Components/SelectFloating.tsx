import { HiChevronDown } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import type { SelectFloatingProps } from "../Interface/MainInterface";

export default function SelectFloating({
  id,
  label,
  options,
  onChange,
  value,
}: SelectFloatingProps) {
  const isActive = value !== "";

  const handleClear = () => {
    onChange("");
  };

  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="peer w-full appearance-none border bg-white border-gray-300 rounded-xl px-4 pt-5.5 pb-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="" disabled hidden></option>

        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {value ? (
        <IoIosClose
          size={20}
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
        />
      ) : (
        <HiChevronDown
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
        />
      )}

      <label
        htmlFor={id}
        className={`
          absolute left-4 transition-all duration-200
          ${
            isActive
              ? "top-2 text-xs text-blue-600"
              : "top-1/2 -translate-y-1/2 text-sm text-gray-400"
          }
        `}
      >
        {label}
      </label>
    </div>
  );
}
