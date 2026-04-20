/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { formatRupiah } from "../Utils/FormatRupiah";
import type { InputRupiahProps } from "../Interface/MainInterface";

export default function InputRupiah({
  id,
  value,
  onChange,
  placeholder = "",
}: InputRupiahProps) {
  const [display, setDisplay] = useState<string>("");

  useEffect(() => {
    setDisplay(value ? formatRupiah(value) : "");
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");

    if (!raw) {
      setDisplay("");
      onChange(0);
      return;
    }

    const numberValue = Number(raw);
    const formatted = formatRupiah(numberValue);

    setDisplay(formatted);
    onChange(numberValue);
  };

  return (
    <input
      id={id}
      type="text"
      value={display}
      onChange={handleChange}
      placeholder={placeholder}
      className="peer w-full bg-white border border-gray-300 rounded-xl px-4 pt-5.5 pb-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  );
}
