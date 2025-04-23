export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  tasks?: string[];
  technologies?: string[];
}

const experience: Experience[] = [
  {
    title: "Stage de formation humaine et sociale",
    company: "Polyclinique Cap Bon",
    location: "Tunis, Tunisie",
    startDate: "2023",
    endDate: "2023",
    description: "Étude du système de gestion des patients Clinisys",
    tasks: [
      "Analyse du système de gestion des patients",
      "Apprentissage des processus de gestion hospitalière",
      "Observation des interactions entre le personnel et le système"
    ],
    technologies: ["Clinisys"]
  },
  {
    title: "Stage d'initiation à la vie professionnelle",
    company: "Medianet Consulting",
    location: "Tunis, Tunisie",
    startDate: "2022",
    endDate: "2022",
    description: "Création site web de location de voiture en utilisant les technologie angular pour frontend et springboot pour backend",
    tasks: [
      "Développement d'une interface utilisateur responsive avec Angular",
      "Création d'une API RESTful avec Spring Boot",
      "Implémentation des fonctionnalités de réservation et gestion de véhicules",
      "Tests et déploiement de l'application"
    ],
    technologies: ["Angular", "Spring Boot", "REST API", "HTML", "CSS", "JavaScript", "Java"]
  }
];

export default experience;