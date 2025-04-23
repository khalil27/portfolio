export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string | 'present';
  description?: string;
}

const education: Education[] = [
  {
    degree: "Ingénierie en informatique",
    institution: "École Supérieure Privée d'Ingénierie et de Technologies - ESPRIT",
    location: "Tunisia",
    startDate: "2020",
    endDate: "present",
    description: "Currently pursuing a degree in Software Engineering with focus on web and mobile development."
  },
  {
    degree: "Baccalauréat",
    institution: "Lycée Menzah 9",
    location: "Tunis",
    startDate: "2020",
    endDate: "2020",
    description: "Section mathématique | Mention BIEN"
  }
];

export default education;