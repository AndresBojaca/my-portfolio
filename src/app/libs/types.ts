export type Job = {
  id: number;
  company: string;
  positions: Position[];
  logoUrl: string;
}

export type PositionDescription = {
  description: string;
}

export type Position = {
  position?: string;
  description?: Array<PositionDescription> | string;
  startDate?: string;
  endDate?: string;
  skills?: Array<[]>;
}

export type GithubProject = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  visibility: string;
  topics: string[];
}

export type Projects = {
  id: number;
  name: string;
  description: string;
  url: string;
  topics: string[];
}

export type ProjectCard = {
  name: string;
  description: string;
  href: string;
  tecnologies: string[];
}