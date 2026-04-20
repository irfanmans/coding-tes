import { FaGoogleWallet, FaPlus } from "react-icons/fa";
import type { NavbarProps } from "../Interface/MainInterface";
import Button from "./ui/Button";

export default function Navbar({ onShowDialogForm }: NavbarProps) {
  return (
    <>
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-10 w-10 shrink-0 rounded-xl flex items-center justify-center bg-purple-500 text-white shadow-sm">
              <FaGoogleWallet size={20} />
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg font-semibold text-slate-900 truncate">
                Coding Test
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 truncate">
                Tool pencatatan dan pengajuan
              </p>
            </div>
          </div>

          <Button
            onClick={onShowDialogForm}
            type="button"
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-sm font-medium text-white shadow-sm transition-all hover:shadow-md active:scale-[0.98] shrink-0 cursor-pointer bg-purple-500"
          >
            <FaPlus size={16} className="sm:hidden" />
            <span className="hidden sm:inline">Pengajuan Baru</span>
          </Button>
        </div>
      </header>
    </>
  );
}
