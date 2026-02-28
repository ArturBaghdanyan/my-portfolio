import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGithubSquare,
  FaVuejs,
  FaFigma,
  FaNode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiNestjs, 
  SiMongodb,
} from "react-icons/si";

import type { Skill } from "../types/skills";

export const listSkills: Skill[] = [
  { id: 1, imgSrc: FaHtml5, text: "HTML" },
  { id: 2, imgSrc: FaCss3Alt, text: "CSS" },
  { id: 3, imgSrc: FaSass, text: "Sass" },
  { id: 4, imgSrc: SiTailwindcss, text: "Tailwind CSS" },
  { id: 5, imgSrc: SiJavascript, text: "JavaScript" },
  { id: 6, imgSrc: SiTypescript, text: "TypeScript" },
  { id: 7, imgSrc: FaReact, text: "React JS" },
  { id: 8, imgSrc: SiRedux, text: "Redux" },
  { id: 9, imgSrc: SiNextdotjs, text: "Next JS" },
  { id: 10, imgSrc: FaVuejs, text: "Vue JS" },
  { id: 11, imgSrc: FaNode, text: "Node JS" },
  { id: 12, imgSrc: SiExpress, text: "Express JS" },
  { id: 13, imgSrc: SiNestjs, text: "Nest JS" },
  { id: 14, imgSrc: SiPostgresql, text: "Postgres" },
  { id: 15, imgSrc: SiMongodb, text: "MongoDB" },
  { id: 16, imgSrc: FaGithubSquare, text: "Git" },
  { id: 17, imgSrc: FaFigma, text: "Figma" },
];
