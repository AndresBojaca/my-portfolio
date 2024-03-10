import React from "react";
import { Job } from '../../../types/Job.types';

import SkeletonJobList from './SkeletonJobList'

import '../job-list/JobList.css'

interface Props {
  jobs: Job[];
  loading: boolean
}

const JobList: React.FC<Props> = ({ jobs, loading }) => {
  return (


    loading ? 
      <SkeletonJobList cant={6}/>
      :
        <>
        <ul className="job-list">
          {jobs.map(job => (
            <li key={job.id}>
              <div className="flex flex-col gap-2 text-left">
                <div className="flex gap-3 relative">
                  <img src={job.logoUrl} alt={job.company} className="company-img bg-zinc-600"/>
                  <div className="flex flex-col gap-2">
                    <span className="flex gap-2 text-sky-400 font-bold mt-1">{job.company}
                      {job.positions.length === 1 && job.positions[0].endDate && job.positions[0].endDate.includes("Actualidad") && (
                        <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full">Actual</span>
                      )}
                    </span>
                    {job.positions.map((position, index) => (
                      <div key={index} className="relative">
                        <div className="line-courve"></div>
                        <p key={index} className="mb-2 text-slate-100">
                          {position.position}
                        </p>
                        <p className="text-gray-400 text-sm">
                          ( {position.startDate} - {position.endDate} ) • {position.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </>
  );
}

export default JobList;
