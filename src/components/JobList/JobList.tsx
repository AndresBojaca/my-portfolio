'use client';

import React, { useEffect, useState } from "react";

import { RxCalendar } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";

import SkillPill from "../ui/skillPill";

import { getIconLogo } from "../ui/icons";
import './JobList.css';
import type { Job } from '../../app/libs/types';
import SkeletonJobList from "./SkeletonJobList";

const fetchData = async () => {
  const response = await fetch(`api/portfolio/jobs`);
  return response.json();
}

const JobList = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData()
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
                          {
                            Array.isArray(position.description) ? (
                              <ul className="list-circle pl-4">
                                {position.description.map((description, index) => (
                                  <li className="mb-1 last:mb-0" key={index}>
                                    <span className="text-dark dark:text-white">
                                      {String(description)}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            ) :
                            (<span>{position.description}</span>)
                          }
                        </div>
                        <div className="skills">
                          <div className="flex gap-2 flex-wrap">
                            {position.skills && position.skills.map((skill, skillIndex) => (
                              <SkillPill key={skillIndex} skill={String(skill)} />
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
