/**
 * Gets formatters for date formatting
 * @param language The locale for formatting e.g. "en-gb" for British English
 */
export function getDateHelpers(language: string = "en-gb") {
  return {
    MY: (date: string) => new Date(date).toLocaleDateString(language, { year: "numeric", month: "short", timeZone: "UTC" }),
    Y: (date: string) => new Date(date).toLocaleDateString(language, { year: "numeric", timeZone: "UTC" }),
    DMY: (date: string) => new Date(date).toLocaleDateString(language, { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }),
  };
}
