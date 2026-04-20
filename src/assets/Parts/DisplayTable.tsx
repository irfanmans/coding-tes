import { BiMessageSquareDetail } from "react-icons/bi";
import Button from "../Components/ui/Button";
import { LiaCheckSolid } from "react-icons/lia";
import { RiDeleteBin5Line } from "react-icons/ri";
import type { DisplayTableProps } from "../Interface/MainInterface";
import { formatTanggal } from "../Utils/FormatTanggal";
import { formatRupiah } from "../Utils/FormatRupiah";
import { IoClose } from "react-icons/io5";

export default function DisplayTable({
  data,
  onDetail,
  onRejected,
  onApprove,
  onDelete,
}: DisplayTableProps) {
  return (
    <div className="shadow rounded-2xl p-2 bg-white">
      <div className="mb-5">
        <h1 className="text-lg font-medium">Daftar Pengajuan</h1>
        <p className="text-sm font-light text-gray-500">
          Total {data.length} pengajuan tercatat
        </p>
      </div>

      <div className="block">
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          {data.length > 0 ? (
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-gray-50">
                <tr className="text-xs uppercase text-gray-500 tracking-wider">
                  <th className="px-3 py-3">Nama Nasabah</th>
                  <th className="px-3 py-3">Tipe</th>
                  <th className="px-3 py-3">Nominal</th>
                  <th className="px-3 py-3">Tenor</th>
                  <th className="px-3 py-3">Cicilan</th>
                  <th className="px-3 py-3">Tanggal</th>
                  <th className="px-3 py-3">Status</th>
                  <th className="px-3 py-3">Aksi</th>
                </tr>
              </thead>

              <tbody className="text-xs sm:text-sm">
                {data.map((item, index) => (
                  <tr className="hover:bg-gray-50 transition" key={index}>
                    <td className="px-4 py-4 text-gray-800">{item.fullName}</td>
                    <td className="px-4 py-4 text-gray-800">{item.type}</td>
                    <td className="px-4 py-4 text-gray-800">
                      {formatRupiah(item.nominal)}
                    </td>
                    <td className="px-4 py-4 text-gray-800">{`${item.tenor} Bulan`}</td>
                    <td className="px-4 py-4 text-gray-800">
                      {formatRupiah(Number(item.nominal) / Number(item.tenor))}
                    </td>
                    <td className="px-4 py-4 text-gray-800">
                      {formatTanggal(item.date)}
                    </td>
                    <td className="px-4 py-4 text-gray-800">{item.status}</td>
                    <td>
                      <div className="flex gap-1.5">
                        <Button
                          onClick={() => onDetail(item)}
                          type="button"
                          className="border border-gray-300 px-2 py-2 rounded-md cursor-pointer"
                        >
                          <BiMessageSquareDetail size={15} />
                        </Button>

                        <Button
                          type="button"
                          onClick={() => onApprove(index)}
                          disabled={item.status === "Disetujui"}
                          className="border border-gray-300 px-2 py-2 rounded-md bg-green-500 cursor-pointer"
                        >
                          <LiaCheckSolid size={15} className="text-white" />
                        </Button>

                        <Button
                          type="button"
                          onClick={() => onRejected(index)}
                          className="border border-gray-300 px-2 py-2 rounded-md bg-red-400 cursor-pointer"
                        >
                          <IoClose size={15} className="text-white" />
                        </Button>

                        <Button
                          type="button"
                          onClick={() => onDelete(index)}
                          className="border border-gray-300 px-2 py-2 rounded-md bg-red-400 cursor-pointer"
                        >
                          <RiDeleteBin5Line size={15} className="text-white" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-md text-gray-400 text-center py-10">
              Belum ada pengajuan
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
