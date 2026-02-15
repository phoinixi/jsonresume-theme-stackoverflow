import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export function paragraphSplit(text: string | null | undefined): string {
  if (text == null) return "";
  return md.render(text).trim();
}

export function toLowerCase(str: string): string {
  return str.toLowerCase();
}

export function spaceToDash(str: string): string {
  return str.replace(/\s/g, "-").toLowerCase();
}

export interface Birth {
  place?: string;
  state?: string;
  date?: string;
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

export interface I18nResources {
  [lang: string]: {
    [key: string]: string;
  };
}

const resources: I18nResources = {
  en: {
    "resume.summary": "Summary",
    "resume.skills": "Skills",
    "resume.workExperience": "Work Experience",
    "resume.projects": "Projects",
    "resume.volunteer": "Volunteer",
    "resume.education": "Education",
    "resume.languages": "Languages",
    "resume.awards": "Awards",
    "resume.certificates": "Certificates",
    "resume.publications": "Publications",
    "resume.interests": "Interests",
    "resume.references": "References",
  },
  de: {
    "resume.summary": "Übersicht",
    "resume.skills": "Kenntnisse",
    "resume.workExperience": "Berufserfahrung",
    "resume.projects": "Projekte",
    "resume.volunteer": "Ehrenamtliche Tätigkeiten",
    "resume.education": "Bildung",
    "resume.languages": "Sprachkenntnisse",
    "resume.awards": "Auszeichnungen",
    "resume.certificates": "Zertifikate",
    "resume.publications": "Veröffentlichungen",
    "resume.interests": "Interessen",
    "resume.references": "Empfehlungen",
  },
};

let currentLang = "en";

export function setI18nLanguage(lang: string): void {
  switch (lang) {
    case "en-gb":
      currentLang = "en";
      break;
    default:
      currentLang = lang;
  }
}

export function t(key: string): string {
  const lang = resources[currentLang] || resources["en"];
  return lang[key] || resources["en"][key] || key;
}
