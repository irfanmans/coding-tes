import type { InputProps } from "../../Interface/MainInterface";

export default function Input({
  id,
  name,
  value,
  type = "text",
  placeholder = " ",
  onChange,
}: InputProps) {
  return (
    <>
      <input
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        className="peer w-full border border-gray-300 rounded-xl px-4 pt-5.5 pb-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </>
  );
}
