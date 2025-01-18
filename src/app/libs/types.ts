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
  description?: Array<PositionDescription>;
  startDate?: string;
  endDate?: string;
  skills?: Array<[]>;
}