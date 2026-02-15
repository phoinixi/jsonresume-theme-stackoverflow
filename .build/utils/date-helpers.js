/**
 * Gets formatters for date formatting
 * @param language The locale for formatting e.g. "en-gb" for British English
 */
export function getDateHelpers(language = "en-gb") {
  return {
    MY: (date) => new Date(date).toLocaleDateString(language, { year: "numeric", month: "short" }),
    Y: (date) => new Date(date).toLocaleDateString(language, { year: "numeric" }),
    DMY: (date) => new Date(date).toLocaleDateString(language, { day: "numeric", month: "short", year: "numeric" }),
  };
}
