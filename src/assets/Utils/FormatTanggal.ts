export const formatTanggal = (date?: string | Date): string => {
  if (!date) return "--";

  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) return "--";

  return parsedDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
