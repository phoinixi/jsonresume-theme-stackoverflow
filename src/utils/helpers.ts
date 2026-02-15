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
  fr: {
    "resume.summary": "Résumé",
    "resume.skills": "Compétences",
    "resume.workExperience": "Expérience professionnelle",
    "resume.projects": "Projets",
    "resume.volunteer": "Bénévolat",
    "resume.education": "Formation",
    "resume.languages": "Langues",
    "resume.awards": "Prix",
    "resume.certificates": "Certifications",
    "resume.publications": "Publications",
    "resume.interests": "Centres d'intérêt",
    "resume.references": "Références",
  },
  es: {
    "resume.summary": "Resumen",
    "resume.skills": "Habilidades",
    "resume.workExperience": "Experiencia laboral",
    "resume.projects": "Proyectos",
    "resume.volunteer": "Voluntariado",
    "resume.education": "Educación",
    "resume.languages": "Idiomas",
    "resume.awards": "Premios",
    "resume.certificates": "Certificaciones",
    "resume.publications": "Publicaciones",
    "resume.interests": "Intereses",
    "resume.references": "Referencias",
  },
  it: {
    "resume.summary": "Profilo",
    "resume.skills": "Competenze",
    "resume.workExperience": "Esperienza lavorativa",
    "resume.projects": "Progetti",
    "resume.volunteer": "Volontariato",
    "resume.education": "Istruzione",
    "resume.languages": "Lingue",
    "resume.awards": "Premi",
    "resume.certificates": "Certificazioni",
    "resume.publications": "Pubblicazioni",
    "resume.interests": "Interessi",
    "resume.references": "Referenze",
  },
  pt: {
    "resume.summary": "Resumo",
    "resume.skills": "Competências",
    "resume.workExperience": "Experiência profissional",
    "resume.projects": "Projetos",
    "resume.volunteer": "Voluntariado",
    "resume.education": "Educação",
    "resume.languages": "Idiomas",
    "resume.awards": "Prêmios",
    "resume.certificates": "Certificações",
    "resume.publications": "Publicações",
    "resume.interests": "Interesses",
    "resume.references": "Referências",
  },
  zh: {
    "resume.summary": "简介",
    "resume.skills": "技能",
    "resume.workExperience": "工作经历",
    "resume.projects": "项目",
    "resume.volunteer": "志愿服务",
    "resume.education": "教育背景",
    "resume.languages": "语言能力",
    "resume.awards": "奖项",
    "resume.certificates": "证书",
    "resume.publications": "出版物",
    "resume.interests": "兴趣爱好",
    "resume.references": "推荐信",
  },
  ja: {
    "resume.summary": "概要",
    "resume.skills": "スキル",
    "resume.workExperience": "職歴",
    "resume.projects": "プロジェクト",
    "resume.volunteer": "ボランティア",
    "resume.education": "学歴",
    "resume.languages": "言語",
    "resume.awards": "受賞歴",
    "resume.certificates": "資格",
    "resume.publications": "出版物",
    "resume.interests": "興味・関心",
    "resume.references": "推薦状",
  },
  ko: {
    "resume.summary": "요약",
    "resume.skills": "기술",
    "resume.workExperience": "경력",
    "resume.projects": "프로젝트",
    "resume.volunteer": "봉사활동",
    "resume.education": "학력",
    "resume.languages": "언어",
    "resume.awards": "수상",
    "resume.certificates": "자격증",
    "resume.publications": "출판물",
    "resume.interests": "관심사",
    "resume.references": "추천서",
  },
  nl: {
    "resume.summary": "Samenvatting",
    "resume.skills": "Vaardigheden",
    "resume.workExperience": "Werkervaring",
    "resume.projects": "Projecten",
    "resume.volunteer": "Vrijwilligerswerk",
    "resume.education": "Opleiding",
    "resume.languages": "Talen",
    "resume.awards": "Prijzen",
    "resume.certificates": "Certificaten",
    "resume.publications": "Publicaties",
    "resume.interests": "Interesses",
    "resume.references": "Referenties",
  },
  pl: {
    "resume.summary": "Podsumowanie",
    "resume.skills": "Umiejętności",
    "resume.workExperience": "Doświadczenie zawodowe",
    "resume.projects": "Projekty",
    "resume.volunteer": "Wolontariat",
    "resume.education": "Wykształcenie",
    "resume.languages": "Języki",
    "resume.awards": "Nagrody",
    "resume.certificates": "Certyfikaty",
    "resume.publications": "Publikacje",
    "resume.interests": "Zainteresowania",
    "resume.references": "Referencje",
  },
  ru: {
    "resume.summary": "Обо мне",
    "resume.skills": "Навыки",
    "resume.workExperience": "Опыт работы",
    "resume.projects": "Проекты",
    "resume.volunteer": "Волонтёрство",
    "resume.education": "Образование",
    "resume.languages": "Языки",
    "resume.awards": "Награды",
    "resume.certificates": "Сертификаты",
    "resume.publications": "Публикации",
    "resume.interests": "Интересы",
    "resume.references": "Рекомендации",
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
