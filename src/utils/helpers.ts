// Re-export all utilities for backward compatibility
export { paragraphSplit } from "./markdown.ts";
export { normalizeLevel } from "./levels.ts";
export { setI18nLanguage, t } from "./i18n.ts";
export type { Birth } from "../types.ts";

export function toLowerCase(str: string): string {
  return str.toLowerCase();
}

export function spaceToDash(str: string): string {
  return str.replace(/\s/g, "-").toLowerCase();
}
