export type Job = {
  id: number;
  company: string;
  positions: Position[];
  logoUrl: string;
}

export type Position = {
  position?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
}