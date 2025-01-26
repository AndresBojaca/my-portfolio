type positions = {
    position: string;
    description: string[] | string;
    startDate: string;
    endDate: string;
    skills: string[];
}

export type JobsResponse = {
    id: number;
    company: string;
    positions: positions[];
    logoUrl: string;
}
