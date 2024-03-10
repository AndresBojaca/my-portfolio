export interface Job {
  id: number;
  company: string;
  positions: Position[];
  logoUrl: string;
}

export interface Position {
  position?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
}