import type { DetailFieldProps } from "../../Interface/MainInterface";

export default function DetailField({ title, description }: DetailFieldProps) {
  return (
    <>
      <div className="flex justify-between mt-2">
        <h1 className="text-sm font-light text-gray-400">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
    </>
  );
}
