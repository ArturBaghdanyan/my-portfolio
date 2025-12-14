export interface IProject {
  image?: string;
  id: string;
  key: string;
  date?: string;
  title: string;
  skill: string;
  description: string;
  features?: string;
  textList?: { text: string }[];
  link?: string;
  site?: string;
}
