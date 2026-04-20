import type { ButtonProps } from "../../Interface/MainInterface";

export default function Button({
  children,
  type,
  className,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {children}
      </button>
    </>
  );
}
