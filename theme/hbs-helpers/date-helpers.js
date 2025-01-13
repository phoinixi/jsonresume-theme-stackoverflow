/**
 * Gets formatters for date formating
 * @param language The locale which should be used for formatting eg. "en-gb" for british language
 * @returns {{MY: (function(*): string), Y: (function(*): string), DMY: (function(*): string)}} Three formatters named MY. Y and DMY. MY returns the short form of the month plus the numeric year. Y returns only the numeric year. DMY same as MY except the day is prepended.
 */
function getDateHelpers(language = "en-gb") {
  return {
    MY: date => new Date(date).toLocaleDateString(language, {year: "numeric", month: "short"}),
    Y: date => new Date(date).toLocaleDateString(language, {year: "numeric"}),
    DMY: date => new Date(date).toLocaleDateString(language, {day: "numeric", month: "short", year: "numeric"})
  }
}




module.exports = { getDateHelpers };
