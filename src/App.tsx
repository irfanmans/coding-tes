import { useEffect, useState } from "react";
import LayoutApp from "./assets/Layout";
import Navbar from "./assets/Components/Navbar";
import type { Pengajuan } from "./assets/Interface/MainInterface";
import Statistik from "./assets/Parts/Statistik";
import DisplayTable from "./assets/Parts/DisplayTable";
import DialogFormAdd from "./assets/Parts/DialogFormAdd";
import DialogDetail from "./assets/Parts/DialogDetail";
import DialogAlertNotification from "./assets/Components/DialogAlertNotification";
import { Toaster } from "sonner";

function App() {
  const [data, setData] = useState<Pengajuan[]>(() => {
    const stored = localStorage.getItem("data");
    return stored ? JSON.parse(stored) : [];
  });
  const [showForm, setShowForm] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState<Pengajuan | null>(null);
  const [showRejectedDialog, setShowRejectedDialog] = useState(false);
  const [rejectedndex, setRejectedIndex] = useState<number | null>(null);
  const [showApproveDialog, setShowApproveDialog] = useState(false);
  const [approveIndex, setApproveIndex] = useState<number | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  function handleAdd(item: Pengajuan) {
    setData((prev) => [...prev, item]);
  }

  function handleApprove(index: number) {
    setApproveIndex(index);
    setShowApproveDialog(true);
  }

  function confirmApprove() {
    if (approveIndex === null) return;

    const updated = data.map((item, i): Pengajuan => {
      if (i === approveIndex) {
        // biar gak bisa double approve
        if (item.status === "Disetujui") return item;

        return { ...item, status: "Disetujui" };
      }
      return item;
    });

    setData(updated);
    setApproveIndex(null);
    setShowApproveDialog(false);
  }

  function handleRejected(index: number) {
    setRejectedIndex(index);
    setShowRejectedDialog(true);
  }

  function handleClickDelete(index: number) {
    setDeleteIndex(index);
    setShowDeleteDialog(true);
  }

  function confirmDelete() {
    if (deleteIndex === null) return;

    const filtered = data.filter((_, i) => i !== deleteIndex);

    setData(filtered);
    setDeleteIndex(null);
    setShowDeleteDialog(false);
  }

  function confirmRejected() {
    if (rejectedndex === null) return;

    const newData = data.map(
      (item, i): Pengajuan =>
        i === rejectedndex ? { ...item, status: "Ditolak" } : item,
    );

    setData(newData);
    setRejectedIndex(null);
    setShowRejectedDialog(false);
  }

  return (
    <>
      <LayoutApp>
        <Navbar onShowDialogForm={() => setShowForm(true)} />

        <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
          <Statistik data={data} />

          <DisplayTable
            data={data}
            onDetail={(item) => setSelectedDetail(item)}
            onRejected={handleRejected}
            onApprove={handleApprove}
            onDelete={handleClickDelete}
          />
        </main>

        {showForm && (
          <DialogFormAdd
            onClose={() => setShowForm(false)}
            onAddNasabah={handleAdd}
            data={data}
          />
        )}

        {selectedDetail && (
          <DialogDetail
            data={selectedDetail}
            onClose={() => setSelectedDetail(null)}
          />
        )}

        {showRejectedDialog && (
          <DialogAlertNotification
            title="Tolak Pengajuan?"
            label="menolak"
            status="ditolak"
            onConfirm={confirmRejected}
            onCancel={() => {
              setShowRejectedDialog(false);
              setRejectedIndex(null);
            }}
            titleBtnApprove="Ya, Tolak"
            titleBtnCancel="Batal"
          />
        )}

        {/* ✅ SETUJU */}
        {showApproveDialog && (
          <DialogAlertNotification
            title="Setujui Pengajuan?"
            label="menyetujui"
            status="disetujui"
            onConfirm={confirmApprove}
            onCancel={() => {
              setShowApproveDialog(false);
              setApproveIndex(null);
            }}
            titleBtnApprove="Ya, Setujui"
            titleBtnCancel="Batal"
          />
        )}

        {showDeleteDialog && (
          <DialogAlertNotification
            title="Hapus Data?"
            label="menghapus"
            status="dihapus"
            onConfirm={confirmDelete}
            onCancel={() => {
              setShowDeleteDialog(false);
              setDeleteIndex(null);
            }}
            titleBtnApprove="Ya, Hapus"
            titleBtnCancel="Batal"
          />
        )}
      </LayoutApp>

      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;
