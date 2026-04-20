import type { StatistikCardProps } from "../Interface/MainInterface";
import { formatRupiah } from "../Utils/FormatRupiah";

export default function StatistikCard({
  label,
  title,
  value,
}: StatistikCardProps) {
  const colorMap: Record<string, { background: string; border: string }> = {
    waiting: {
      background: "bg-yellow-100",
      border: "border-yellow-500",
    },
    approved: {
      background: "bg-green-100",
      border: "border-green-500",
    },
    rejected: {
      background: "bg-red-100",
      border: "border-red-500",
    },
    result: {
      background: "bg-blue-100",
      border: "border-blue-500",
    },
  };

  const color = colorMap[label] || {
    background: "bg-gray-100",
    border: "border-gray-400",
  };
  return (
    <>
      <div
        className={`${color.background} ${color.border} border rounded-2xl p-4 sm:p-5 transition-all`}
      >
        <p className="text-xs sm:text-sm font-medium  opacity-80">{title}</p>
        <h1 className="mt-2 text-md sm:text-md font-medium">
          {title === "Total" ? formatRupiah(value) : value}
        </h1>
      </div>
    </>
  );
}
