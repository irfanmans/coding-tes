import { IoIosClose } from "react-icons/io";
import Input from "../Components/ui/Input";
import Button from "../Components/ui/Button";
import Label from "../Components/ui/Label";
import InputRupiah from "../Components/InputRupiah";
import SelectFloating from "../Components/SelectFloating";
import TextareaFloating from "../Components/TextareaFloating";
import type { DialogFormAddProps, Pengajuan } from "../Interface/MainInterface";
import { useState } from "react";

export default function DialogFormAdd({
  onClose,
  onAddNasabah,
  data,
}: DialogFormAddProps) {
  const [form, setForm] = useState<Pengajuan>({
    fullName: "",
    type: "",
    nominal: 0,
    tenor: "",
    income: 0,
    notes: "",
    date: new Date().toISOString(),
    status: "Menunggu",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.income < 1_000_000) {
      alert("Nasabah belum dapat mengajukan pinjaman");
      return;
    }

    if (form.nominal > 200_000_000) {
      alert("Nominal maksimal pinjaman adalah 200 juta");
      return;
    }

    const totalPengajuan = data.filter(
      (item) => item.fullName === form.fullName,
    ).length;

    if (totalPengajuan >= 3) {
      alert("Nasabah sudah mencapai batas maksimal 3 pengajuan");
      return;
    }

    onAddNasabah(form);
    onClose();
  };

  function handleReset() {
    setForm({
      fullName: "",
      type: "",
      nominal: 0,
      tenor: "",
      income: 0,
      notes: "",
      date: new Date().toISOString(),
      status: "Menunggu",
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white max-w-3xl w-full rounded-2xl h-fit shadow-xl py-5 px-5 mx-5 animate-scaleIn">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-lg font-semibold">Formulir Pengajuan Kredit</h1>
            <p className="text-sm text-gray-400">
              Catat pengajuan kredit nasabah baru
            </p>
          </div>

          <Button
            onClick={onClose}
            type="button"
            className="text-gray-400 hover:text-black"
          >
            <IoIosClose size={30} />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 pt-5">
          <div className="relative">
            <Input
              id="name"
              type="text"
              name="fullName"
              placeholder=" "
              value={form.fullName}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, fullName: e.target.value }))
              }
            />
            <Label htmlFor="name">Nama Lengkap</Label>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <SelectFloating
              id="type"
              label="Tipe Pengajuan"
              options={["Sepeda Motor", "Mobil", "Multiguna"]}
              value={form.type}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, type: value }))
              }
            />

            <div className="relative">
              <InputRupiah
                id="nominal"
                value={form.nominal}
                placeholder=" "
                onChange={(value) =>
                  setForm((prev) => ({ ...prev, nominal: value }))
                }
              />
              <Label htmlFor="nominal">Nominal Pengajuan</Label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <SelectFloating
              id="tenor"
              label="Tenor (Bulan)"
              options={["3", "6", "12", "18", "24"]}
              value={form.tenor}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, tenor: value }))
              }
            />

            <div className="relative">
              <InputRupiah
                id="income"
                value={form.income}
                placeholder=" "
                onChange={(value) =>
                  setForm((prev) => ({ ...prev, income: value }))
                }
              />
              <Label htmlFor="income">Pendapatan Bulanan</Label>
            </div>
          </div>

          <div className="relative">
            <TextareaFloating
              id="notes"
              label="Catatan"
              name="notes"
              value={form.notes}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, notes: e.target.value }))
              }
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              onClick={handleReset}
              className="px-3 py-1.5 text-sm border rounded-lg border-gray-300"
            >
              Reset
            </Button>
            <Button
              type="submit"
              className="px-3 py-1.5 text-sm border rounded-lg bg-purple-500 text-white"
            >
              Simpan Pengajuan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
