'use client'
import React, { useEffect, useState, useRef } from "react";
import { Job } from '../../../libs/types';
import '../job-list/JobList.css';
import SkeletonJobList from "../job-list/SkeletonJobList";

interface Props {
  jobs: Job[];
}

const JobList = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [height, setHeight] = useState(0)
  const ref = useRef(null);

  useEffect(() => {
    fetch('https://65ed60630ddee626c9b18ac6.mockapi.io/api/jobs')
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          setLoading(false);
          setJobs(data);
        }, 1000);
      })
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    loading ? <div>
      <SkeletonJobList cant={6} />
    </div> :
      <ul className="job-list">
        {jobs.map(job => (
          <li key={job.id}>
            <div className="flex flex-col text-left company-job-list">
              <div className="flex gap-3 relative">
                <img src={job.logoUrl} alt={job.company} className="company-img bg-zinc-600 cyan" />
                <div className="flex flex-col gap-2">
                  <span className="flex gap-2 font-bold text-lg">{job.company}
                    {job.positions.length === 1 && job.positions[0].endDate && job.positions[0].endDate.includes("Actualidad") && (
                      <span className="inline-block bg-gradient-to-br from-purple-600 to-blue-500 text-white text-[10px] px-3 rounded-full">Actualidad</span>
                    )}
                  </span>
                  {job.positions.map((position: any, index: number) => (
                    <div key={index} className={`relative cursor-pointer mb-2 job job-${index + 1}`}>
                      <div className="line-courve"></div>
                      <p key={index} className="mb-2 text-dark text-base">
                        {position.position}
                      </p>
                      <p className="text-dark opacity-70 text-base">
                        ( {position.startDate} - {position.endDate} ) • {position.description}
                      </p>
                      <div className="skills">
                        <div className="flex gap-2 flex-wrap">
                          {position.skills.map((skill: string, index: number) =>
                            <p className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-medium text-dark rounded-md group bg-gradient-to-br from-purple-600 to-blue-500" key={index}>
                              <span className="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-sm">
                                {skill}
                              </span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
  );
}

export default JobList;
