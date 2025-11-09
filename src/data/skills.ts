import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGithubSquare,
  FaVuejs,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiEslint,
  SiPrettier,
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
  { id: 11, imgSrc: FaGithubSquare, text: "Git" },
  { id: 13, imgSrc: FaFigma, text: "Figma" },
  { id: 14, imgSrc: SiEslint, text: "ESLint" },
  { id: 15, imgSrc: SiPrettier, text: "Prettier" },
];
