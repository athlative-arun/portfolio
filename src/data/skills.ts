// src/data/skills.ts
import skillImages from "./images";

export const allSkills = [
  { name: "JavaScript", img: skillImages.JavaScript, category: "Languages" },
  { name: "Java", img: skillImages.Java, category: "Languages" },
  { name: "Python", img: skillImages.Python, category: "Languages" },
  { name: "C++", img: skillImages["C++"], category: "Languages" },

  { name: "React", img: skillImages.React, category: "Frontend" },
  { name: "HTML", img: skillImages.HTML, category: "Frontend" },
  { name: "CSS", img: skillImages.CSS, category: "Frontend" },
  { name: "Bootstrap", img: skillImages.Bootstrap, category: "Frontend" },
  { name: "Tailwind CSS", img: skillImages.Tailwind, category: "Frontend" },
  { name: "Flutter", img: skillImages.Flutter, category: "Frontend" },

  { name: "Node.js", img: skillImages.Nodejs, category: "Backend" },
  { name: "Express", img: skillImages.Express, category: "Backend" },

  { name: "SQL", img: skillImages.SQL, category: "Languages" },
  { name: "MongoDB", img: skillImages.MongoDB, category: "Databases" },
  { name: "MySQL", img: skillImages.MySQL, category: "Databases" },

  { name: "Git", img: skillImages.Git, category: "Tools" },
  { name: "GitHub", img: skillImages.GitHub, category: "Tools" },
];
