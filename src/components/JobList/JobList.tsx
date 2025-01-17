'use client';
import 'react-icons';
import React, { useEffect, useState, useRef } from "react";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaPhp, FaJenkins, FaBootstrap,
  FaWordpress
} from "react-icons/fa";
import {
  SiLit, SiPolymerproject, SiJquery, SiMysql, SiSonarqube, SiTailwindcss, SiTypescript,
  SiDjango, SiOpenlayers
} from "react-icons/si";
import { TbTestPipe } from "react-icons/tb";
import { Job } from '../../app/libs/types';
import './JobList.css';
import SkeletonJobList from "./SkeletonJobList";

const JobList = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);

  const skillIcons: { [key: string]: JSX.Element } = {
    "React": <FaReact className="size-4" />,
    "React.js": <FaReact className="size-4" />,
    "React Native": <FaReact className="size-4" />,
    "NodeJS": <FaNodeJs className="size-4" />,
    "Node": <FaNodeJs className="size-4" />,
    "HTML": <FaHtml5 className="size-4" />,
    "CSS": <FaCss3Alt className="size-4" />,
    "JavaScript": <FaJs className="size-4" />,
    "TypeScript": <SiTypescript className="size-4" />,
    "PHP": <FaPhp className="size-4" />,
    "MySQL": <SiMysql className="size-4" />,
    "Bootstrap": <FaBootstrap className="size-4" />,
    "Jquery": <SiJquery className="size-4" />,
    "jQuery": <SiJquery className="size-4" />,
    "WordPress": <FaWordpress className="size-4" />,
    "Jenkins": <FaJenkins className="size-4" />,
    "SonarQube": <SiSonarqube className="size-4" />,
    "Tailwind": <SiTailwindcss className="size-4" />,
    "Polymer.js": <SiPolymerproject className="size-4" />,
    "Lit-Element": <SiLit className="size-4" />,
    "CELLS": <TbTestPipe className="size-4" />,
    "Test e2e": <TbTestPipe className="size-4" />,
    "Twig": <FaPhp className="size-4" />,
    "Laravel": <FaPhp className="size-4" />,
    "Django": <SiDjango className="size-4" />,
  };

  useEffect(() => {
    const host = process.env.NEXT_PUBLIC_HOST || 'localhost:3000';
    fetch(`${host}/api/portfolio/jobs`)
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
            <li key={job.id}>
              <div className="flex flex-col text-left company-job-list">
                <div className="flex gap-3 relative">
                  <img src={job.logoUrl} alt={job.company} className="company-img dark:bg-slate-900 bg-[#f2f2f2]" />
                  <div className="flex flex-col gap-4">
                    <span className="flex gap-2 font-bold text-lg">
                      {job.company}
                      {job.positions.length === 1 && job.positions[0].endDate && job.positions[0].endDate.includes("Actualidad") && (
                        <span className="inline-block bg-gradient-to-br from-purple-600 to-blue-500 text-white text-[10px] px-3 rounded-full">Actualidad</span>
                      )}
                    </span>
                    {job.positions.map((position, index) => (
                      <div key={index} className="relative cursor-pointer mb-2 job">
                        <div className="line-courve after:bg-gradient-to-br from-purple-600 to-blue-500"></div>
                        <div className="mb-2">
                          <p className="text-dark text-lg">
                            {position.position}
                          </p>
                          <span className="mb-2 text-sm opacity-60">
                            {position.startDate} - {position.endDate}
                          </span>
                        </div>
                        <p className="text-dark text-sm description">
                          {position.description}
                        </p>
                        <div className="skills mb-2">
                          <div className="flex gap-3 flex-wrap">
                            {position.skills && position.skills.map((skill, skillIndex) => (
                              <p
                                key={skillIndex}
                                className="relative inline-flex items-center justify-center p-[2px] overflow-hidden text-[10px] font-medium text-dark rounded-full group bg-gradient-to-br from-purple-600 to-blue-500"
                              >
                                <span className="relative flex items-center gap-2 px-3 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full">
                                  {skillIcons[skill as unknown as string] || <span className="text-gray-500">⚙</span>}
                                  {skill}
                                </span>
                              </p>
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
