import type { CardSummaryDetailProps } from "../Interface/MainInterface";
import { formatRupiah } from "../Utils/FormatRupiah";

export default function CardSummaryDetail({ data }: CardSummaryDetailProps) {
  return (
    <>
      <div className="mt-8 bg-blue-600 p-5 rounded-2xl text-white">
        <p className="text-xs mb-2 font-light">CICILAN PER BULAN</p>
        <span className="font-bold text-2xl">
          {formatRupiah(Number(data.nominal) / Number(data.tenor))}
        </span>
      </div>
    </>
  );
}
