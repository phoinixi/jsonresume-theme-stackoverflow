const formats: Intl.DateTimeFormatOptions[] = [
  { year: "numeric" }, // "2016"
  { year: "numeric", month: "short" }, // "2016-09"
];

/**
 * Formats a date from the resume, such as "2016" or "2016-09"
 * @param date The date as written in the resume
 * @param language The locale for formatting e.g. "en-gb" for British English
 */
export function formatDate(date: string, language: string = "en-gb"): string {
  const parts = date.split("-").slice(0, formats.length).map(Number);
  const [year, month = 1] = parts;
  return new Date(Date.UTC(year, month - 1)).toLocaleDateString(language, { ...formats[parts.length - 1], timeZone: "UTC" });
}
