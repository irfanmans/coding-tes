export type StatusPengajuan = "Menunggu" | "Disetujui" | "Ditolak";

export interface Pengajuan {
  fullName: string;
  type: string;
  nominal: number;
  tenor: string;
  income: number;
  notes: string;
  date: string;
  status: StatusPengajuan;
}

export interface LayoutAppProps {
  children: React.ReactNode;
}

export interface NavbarProps {
  onShowDialogForm: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  className: string;
  onClick?: VoidFunction;
  disabled?: boolean;
}

export interface StatistikProps {
  data: Pengajuan[];
}

export interface StatistikCardProps {
  label: string;
  title: string;
  value: number;
}

export interface DisplayTableProps {
  data: Pengajuan[];
  onDetail: (item: Pengajuan) => void;
  onRejected: (index: number) => void;
  onApprove: (index: number) => void;
  onDelete: (index: number) => void;
}

export interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export interface InputProps {
  id: string;
  name: string;
  value: string | number;
  type: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export interface InputRupiahProps {
  id: string;
  value?: number;
  onChange: (value: number) => void;
  placeholder?: string;
}

export interface SelectFloatingProps {
  id: string;
  label: string;
  options: string[];
  onChange: (value: string) => void;
  value: string | number;
}

export interface TextareaFloatingProps {
  id: string;
  label: string;
  name?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface DialogFormAddProps {
  onClose: () => void;
  onAddNasabah: (data: Pengajuan) => void;
  data: Pengajuan[];
}

export interface DialogDetailProps {
  data: Pengajuan;
  onClose: () => void;
}

export interface DetailFieldProps {
  title: string;
  description: string;
}

export interface DialogAlertNotificationProps {
  title: string;
  label: string;
  status: string;
  onConfirm: () => void;
  onCancel: () => void;
  titleBtnCancel: string;
  titleBtnApprove: string;
}

export interface CardSummaryDetailProps {
  data: Pengajuan;
}
