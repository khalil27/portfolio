export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  liveDemo?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "skillexchange",
    title: "SkillExchange",
    description: "Plateforme web collaborative d'échange de compétences avec intelligence artificielle intégrée. Les utilisateurs peuvent échanger leurs compétences (programmation, langues, etc.) à travers une approche gamifiée et interactive, accompagnés par un mentor IA. Fonctionnalités : marketplace des compétences, mise en relation intelligente, outils de collaboration en temps réel, système de gamification et paiements sécurisés.",
    technologies: ["React", "Python", "Express.js", "MongoDB", "GraphQL", "Docker", "GitHub Actions", "SonarQube", "Agile Scrum"],
    image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: true
  },
  {
    id: "artvue",
    title: "ArtVue",
    description: "Plateforme d'exposition d'art adaptée pour les environnements desktop, web et mobile. Projet intégré de développement.",
    technologies: ["React", "CSS", "JavaScript", "Responsive Design"],
    image: "https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: true
  },
  {
    id: "smart-adhd",
    title: "Smart ADHD Medical Center",
    description: "Plateforme Web développée en C++ visant à aider les personnes atteintes du TDAH (Trouble Déficitaire de l'Attention avec Hyperactivité).",
    technologies: ["C++", "UML", "Database Design"],
    image: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: true
  },
  {
    id: "punic-war",
    title: "Punic War - Jeu 2D",
    description: "Développement d'un jeu de stratégie historique en 2D utilisant C et la bibliothèque SDL.",
    technologies: ["C", "SDL", "Game Development"],
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: false
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getAllProjects = () => projects;

export default projects;