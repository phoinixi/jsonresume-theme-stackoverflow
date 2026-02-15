export interface Birth {
  place?: string;
  state?: string;
  date?: string;
}

export interface I18nResources {
  [lang: string]: {
    [key: string]: string;
  };
}

export interface Skill {
  name?: string;
  level?: string;
  keywords?: string[];
}

export interface Language {
  language?: string;
  fluency?: string;
}

export interface Location {
  address?: string;
  postalCode?: string;
  city?: string;
  countryCode?: string;
  region?: string;
}

export interface Profile {
  network?: string;
  username?: string;
  url?: string;
}

export interface Basics {
  name?: string;
  label?: string;
  image?: string;
  email?: string;
  phone?: string;
  url?: string;
  summary?: string;
  location?: Location;
  profiles?: Profile[];
  birth?: Birth;
}

export interface WorkEntry {
  name?: string;
  position?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  location?: string;
}

export interface EducationEntry {
  institution?: string;
  url?: string;
  area?: string;
  studyType?: string;
  startDate?: string;
  endDate?: string;
  score?: string;
  courses?: string[];
}

export interface Award {
  title?: string;
  date?: string;
  awarder?: string;
  summary?: string;
}

export interface Certificate {
  name?: string;
  date?: string;
  issuer?: string;
  url?: string;
}

export interface Publication {
  name?: string;
  publisher?: string;
  releaseDate?: string;
  url?: string;
  summary?: string;
}

export interface VolunteerEntry {
  organization?: string;
  position?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

export interface ProjectEntry {
  name?: string;
  description?: string;
  highlights?: string[];
  keywords?: string[];
  startDate?: string;
  endDate?: string;
  url?: string;
  roles?: string[];
  entity?: string;
  type?: string;
}

export interface Interest {
  name?: string;
  keywords?: string[];
}

export interface Reference {
  name?: string;
  reference?: string;
}

export interface ThemeMeta {
  theme?: Record<string, string>;
}

export interface Resume {
  basics?: Basics;
  work?: WorkEntry[];
  volunteer?: VolunteerEntry[];
  education?: EducationEntry[];
  awards?: Award[];
  certificates?: Certificate[];
  publications?: Publication[];
  skills?: Skill[];
  languages?: Language[];
  interests?: Interest[];
  references?: Reference[];
  projects?: ProjectEntry[];
  meta?: ThemeMeta;
}
