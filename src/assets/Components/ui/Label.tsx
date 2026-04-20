import type { LabelProps } from "../../Interface/MainInterface";

export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="absolute left-4 top-2 text-xs text-blue-600 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600"
      >
        {children}
      </label>
    </>
  );
}
