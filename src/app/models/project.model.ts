export interface Project {
  id: number;
  image: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  link: string;
  github: string;
  technologies: string[];
  featured?: boolean;
}
