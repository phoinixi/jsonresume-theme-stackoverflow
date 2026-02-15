// Re-export all utilities for backward compatibility
export { paragraphSplit } from "./markdown.ts";
export { normalizeLevel } from "./levels.ts";
export { setI18nLanguage, t } from "./i18n.ts";
export type { Birth } from "../types.ts";

import type { Birth } from "../types.ts";

export function toLowerCase(str: string): string {
  return str.toLowerCase();
}

export function spaceToDash(str: string): string {
  return str.replace(/\s/g, "-").toLowerCase();
}

export function birthDateHtml(birth: Birth | undefined): string {
  if (!birth || !Object.keys(birth).length) return "";
  const out: string[] = [];
  if (birth.place) {
    out.push(`<div> Born in ${birth.place}`);
  }
  if (birth.place && birth.state) {
    out.push(`, ${birth.state}`);
  }
  const year = birth.date ? new Date(birth.date).toLocaleDateString({ year: "numeric" } as any) : "";
  if (year && birth.place && birth.state) {
    out.push(` in ${year}</div>`);
  } else if (year && (!birth.place || birth.state)) {
    out.push(`<div> Born in ${year}</div>`);
  }
  return out.join("");
}
