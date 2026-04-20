import StatistikCard from "../Components/StatistikCard";
import type { StatistikProps } from "../Interface/MainInterface";

export default function Statistik({ data }: StatistikProps) {
  const stats = data.reduce(
    (acc, item) => {
      if (item.status === "Menunggu") acc.waiting += 1;

      if (item.status === "Disetujui") {
        acc.approved += 1;
        acc.totalNominal += Number(item.nominal);
      }

      if (item.status === "Ditolak") acc.rejected += 1;

      return acc;
    },
    {
      waiting: 0,
      approved: 0,
      rejected: 0,
      totalNominal: 0,
    },
  );

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatistikCard label="waiting" title="Menunggu" value={stats.waiting} />
      <StatistikCard
        label="approved"
        title="Disetujui"
        value={stats.approved}
      />
      <StatistikCard label="rejected" title="Ditolak" value={stats.rejected} />
      <StatistikCard label="result" title="Total" value={stats.totalNominal} />
    </div>
  );
}
