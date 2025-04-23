export interface Language {
  name: string;
  code: string;
  proficiency: string;
  level: number; // 1-100
}

const languages: Language[] = [
  {
    name: "Arabe",
    code: "ar",
    proficiency: "Langue maternelle",
    level: 100
  },
  {
    name: "Français",
    code: "fr",
    proficiency: "Expérimenté",
    level: 90
  },
  {
    name: "Anglais",
    code: "en",
    proficiency: "Courant",
    level: 80
  }
];

export default languages;