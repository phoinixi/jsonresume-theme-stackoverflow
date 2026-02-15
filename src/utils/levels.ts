/**
 * Normalize any skill/language level string to one of the 4 CSS tiers:
 * beginner, intermediate, advanced, master.
 * Supports synonyms in multiple languages. Falls back to fuzzy matching.
 * Returns the original string lowercased if no match (bar won't render).
 */
const levelMap: Record<string, string> = {
  // English
  beginner: "beginner",
  novice: "beginner",
  "entry level": "beginner",
  "entry-level": "beginner",
  junior: "beginner",
  elementary: "beginner",
  basic: "beginner",
  fundamental: "beginner",
  starter: "beginner",

  intermediate: "intermediate",
  moderate: "intermediate",
  "mid-level": "intermediate",
  mid: "intermediate",
  competent: "intermediate",
  proficient: "intermediate",
  "working knowledge": "intermediate",
  "limited working": "intermediate",

  advanced: "advanced",
  senior: "advanced",
  experienced: "advanced",
  "highly proficient": "advanced",
  "professional working": "advanced",
  "full professional": "advanced",
  fluent: "advanced",
  strong: "advanced",

  master: "master",
  expert: "master",
  "native speaker": "master",
  native: "master",
  "native or bilingual": "master",
  mastery: "master",
  lead: "master",
  principal: "master",
  specialist: "master",
  authority: "master",

  // German
  anfänger: "beginner",
  grundkenntnisse: "beginner",
  fortgeschritten: "advanced",
  "sehr gut": "advanced",
  fließend: "advanced",
  experte: "master",
  muttersprache: "master",
  muttersprachlich: "master",
  verhandlungssicher: "advanced",

  // French
  débutant: "beginner",
  intermédiaire: "intermediate",
  avancé: "advanced",
  courant: "advanced",
  bilingue: "master",
  maîtrise: "master",
  notions: "beginner",

  // Spanish
  principiante: "beginner",
  básico: "beginner",
  intermedio: "intermediate",
  avanzado: "advanced",
  experto: "master",
  nativo: "master",
  dominio: "master",

  // Italian
  base: "beginner",
  "livello base": "beginner",
  "livello intermedio": "intermediate",
  "livello avanzato": "advanced",
  madrelingua: "master",
  esperto: "master",
  ottimo: "advanced",
  buono: "intermediate",
  discreto: "intermediate",

  // Portuguese
  iniciante: "beginner",
  intermediário: "intermediate",
  avançado: "advanced",
  especialista: "master",
  fluente: "advanced",
};

export function normalizeLevel(level: string): string {
  const lower = level.toLowerCase().trim();
  if (levelMap[lower]) return levelMap[lower];

  // Fuzzy: check if any key is contained in the input
  for (const [key, tier] of Object.entries(levelMap)) {
    if (lower.includes(key) || key.includes(lower)) return tier as string;
  }

  return lower;
}
