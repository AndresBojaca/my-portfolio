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
  created_at: string;
  homepage: string;
}

export type Projects = {
  id: number;
  name: string;
  description: string;
  href: string;
  date: string;
  tecnologies: string[];
  homepage: string;
}

export type ProjectCard = {
  id: number;
  name: string;
  description: string;
  href: string;
  date: string;
  tecnologies: string[];
  homepage: string;
}