export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'programming' | 'web' | 'database' | 'tools' | 'methodologies' | 'frameworks';
}

const skills: Skill[] = [
  // Programming Languages
  { name: "Java", level: 85, category: "programming" },
  { name: "C", level: 80, category: "programming" },
  { name: "C++", level: 80, category: "programming" },
  { name: "JavaScript", level: 90, category: "programming" },
  { name: "PHP", level: 75, category: "programming" },
  { name: "SQL", level: 85, category: "programming" },
  
  // Web & Mobile
  { name: "HTML", level: 95, category: "web" },
  { name: "CSS", level: 90, category: "web" },
  { name: "React", level: 85, category: "frameworks" },
  { name: "Angular", level: 80, category: "frameworks" },
  { name: "Spring Boot", level: 75, category: "frameworks" },
  { name: "Express.js", level: 80, category: "frameworks" },
  { name: "Flutter", level: 70, category: "frameworks" },
  
  // Databases
  { name: "MongoDB", level: 80, category: "database" },
  { name: "Hive", level: 70, category: "database" },
  { name: "HBase", level: 70, category: "database" },
  { name: "Neo4j", level: 75, category: "database" },
  
  // Tools & Others
  { name: "Git", level: 85, category: "tools" },
  { name: "Photoshop", level: 70, category: "tools" },
  { name: "UML", level: 80, category: "methodologies" },
  { name: "Scrum", level: 85, category: "methodologies" },
  { name: "Unix", level: 75, category: "tools" },
  { name: "Cisco", level: 70, category: "tools" },
  { name: "Network Administration", level: 75, category: "tools" },
];

export const getSkillsByCategory = (category: Skill['category']) => {
  return skills.filter(skill => skill.category === category);
};

export default skills;