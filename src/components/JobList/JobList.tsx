'use client';

import { RxCalendar } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";

import React, { useEffect, useState } from "react";
import { getIconLogo } from "../ui/icons";
import './JobList.css';
import { Job } from '../../app/libs/types';
import SkeletonJobList from "./SkeletonJobList";

const JobList = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const host = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000';
    fetch(`${host}/api/portfolio/jobs`, {
      mode: 'no-cors',
    })
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
    loading ? (
      <div>
        <SkeletonJobList cant={6} />
      </div>
    ) : (
      <div className="job-list-container">
        <ul className="job-list">
          {jobs.map(job => (
            <li key={job.id} className="job-list-item">
              <div className="flex flex-col text-left company-job-list">
                <div className="flex gap-3 relative mb-6">
                  <img src={job.logoUrl} alt={job.company} className="company-img dark:bg-slate-900 bg-[#f2f2f2] animate-ld-float-btt-in" />
                  <div className="flex flex-col gap-4">
                    <span className="flex gap-2 font-bold text-lg ">
                      {job.company}
                      {job.positions.length === 1 && job.positions[0].endDate && job.positions[0].endDate.includes("Actualidad") && (
                        <span className="inline-block bg-gradient-to-br from-purple-600 to-blue-500 text-white text-[10px] px-3 rounded-full">Actualidad</span>
                      )}
                    </span>
                    {job.positions.map((position, index) => (
                      <div key={index} className="relative cursor-pointer job">
                        <div className="line-courve after:bg-gradient-to-br from-purple-600 to-blue-500"></div>
                        <div className="mb-2">
                          <p className="text-dark text-lg mb-2">
                            {position.position}
                          </p>
                          <span className="mb-2 text-sm opacity-60 flex items-center gap-2">
                          <RxCalendar /> {position.startDate} — {position.endDate} <IoLocationOutline className="ml-1" /> Bogotá, Colombia
                          </span>
                        </div>
                        <div className="text-dark text-base description">
                          {position.description && (
                            <ul className="list-circle pl-4">
                              {position.description.map((description, index) => (
                                <li className="mb-1 last:mb-0" key={index}>
                                  {String(description)}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <div className="skills">
                          <div className="flex gap-2 flex-wrap">
                            {position.skills && position.skills.map((skill, skillIndex) => (
                              <div
                                key={skillIndex}
                                className="relative inline-flex items-center justify-center p-[2px] overflow-hidden text-[10px] font-medium text-dark rounded-full border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-900"
                              >
                                <div className="relative flex items-center gap-2 px-2 py-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full ">
                                  {skill ? getIconLogo(String(skill), 'size-4') : <span className="text-gray-500">⚙</span>}
                                  <span className="text-xs">{skill}</span>
                                </div>
                              </div>
                            ))}
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
      </div>
    )
  );
}

export default JobList;
