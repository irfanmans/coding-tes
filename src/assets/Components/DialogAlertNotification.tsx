import type { DialogAlertNotificationProps } from "../Interface/MainInterface";
import Button from "./ui/Button";

export default function DialogAlertNotification({
  title,
  label,
  status,
  onConfirm,
  onCancel,
  titleBtnCancel,
  titleBtnApprove,
}: DialogAlertNotificationProps) {
  let statusButtonColor;

  if (status === "ditolak") {
    statusButtonColor = "bg-orange-500";
  } else if (status === "disetujui") {
    statusButtonColor = "bg-green-500";
  } else if (status === "dihapus") {
    statusButtonColor = "bg-red-500";
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div className="bg-white rounded-xl p-6 z-10 w-87.5 shadow-lg">
        <h1 className="text-lg font-semibold mb-2">{title}</h1>

        <p className="text-sm text-gray-600 mb-4">
          Apakah Anda yakin ingin {label} pengajuan ini? Status akan berubah
          menjadi <span className="font-semibold">{status}</span>.
        </p>

        <div className="flex justify-end gap-2">
          <Button
            type="button"
            onClick={onCancel}
            className="px-3 py-2 bg-gray-200 rounded-md text-sm cursor-pointer"
          >
            {titleBtnCancel}
          </Button>

          <Button
            type="button"
            onClick={onConfirm}
            className={`px-3 py-2 ${statusButtonColor} text-white text-sm rounded-md cursor-pointer`}
          >
            {titleBtnApprove}
          </Button>
        </div>
      </div>
    </div>
  );
}
