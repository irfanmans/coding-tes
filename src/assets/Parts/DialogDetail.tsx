import { IoIosClose } from "react-icons/io";
import Button from "../Components/ui/Button";
import DetailField from "../Components/ui/DetailField";
import CardSummaryDetail from "../Components/CardSummaryDetail";
import type { DialogDetailProps } from "../Interface/MainInterface";
import { formatRupiah } from "../Utils/FormatRupiah";
import { formatTanggal } from "../Utils/FormatTanggal";

export default function DialogDetail({ data, onClose }: DialogDetailProps) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />

        <div className="relative bg-white max-w-2xl w-full rounded-2xl shadow-xl py-8 px-5 mx-5 animate-scaleIn">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-lg font-semibold">Detail Pengajuan</h1>
              <p className="text-sm text-gray-400">
                Informasi lengkap pengajuan dan cicilan
              </p>
            </div>

            <Button
              onClick={onClose}
              type="button"
              className="text-gray-400 hover:text-black cursor-pointer"
            >
              <IoIosClose size={30} />
            </Button>
          </div>

          <div className="mt-10">
            <DetailField title="Nama Nasabah" description={data.fullName} />
            <DetailField title="Tipe Pengajuan" description={data.type} />
            <DetailField
              title="Tanggal Pengajuan"
              description={formatTanggal(data.date)}
            />
            <DetailField title="Status" description={data.status} />
          </div>

          <div className="mt-8">
            <DetailField
              title="Nominal Pengajuan"
              description={formatRupiah(data.nominal)}
            />
            <DetailField title="Tenor" description={data.tenor} />
            <DetailField
              title="Pendapatan Bulanan"
              description={formatRupiah(data.income).toString()}
            />
          </div>

          <CardSummaryDetail data={data} />
        </div>
      </div>
    </>
  );
}
