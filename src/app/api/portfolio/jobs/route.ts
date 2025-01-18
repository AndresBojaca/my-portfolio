import { NextResponse } from 'next/server'
import { JobsResponse } from './mocks/mock.types'
import ResponseData  from './mocks/mock.json'


export async function GET() {
  const convertedData: JobsResponse[] = ResponseData.map(job => ({
    id: job.id,
    company: job.company,
    positions: job.positions.map(position => ({
      position: position.position,
      description: position.description,
      startDate: position.startDate,
      endDate: position.endDate,
      skills: position.skills
    })),
    logoUrl: job.logoUrl
  }));

  return NextResponse.json(convertedData);
}