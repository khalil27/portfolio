export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: {
    city: string;
    country: string;
    address: string;
  };
  socialLinks: {
    linkedin: string;
    github?: string;
  };
  age: number;
  nationality: string;
}

const personalInfo: PersonalInfo = {
  name: "Khalil Mtaallah",
  title: "Software Engineering Student",
  description: "Étudiant motivé en ingénierie informatique. Passionné par l'univers du web et mobile. Ma capacité d'adaptation me permet d'être proactif et fiable dans la réalisation de mes missions, tout en restant ouvert à l'apprentissage continu et curieux des nouvelles avancées technologiques.",
  email: "khalil.taallah@esprit.tn",
  phone: "+216 56-434-102",
  location: {
    city: "Ennasr",
    country: "Tunisia",
    address: "Résidence Al-Jawhara, Rue Mohamed Dhrif, 2037, Ennasr I"
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/khalil-mtaallah-571b72221/",
    github: "https://github.com/khalil27"
  },
  age: 24,
  nationality: "Tunisian"
};

export default personalInfo;