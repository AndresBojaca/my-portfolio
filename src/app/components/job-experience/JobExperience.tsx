'use client'
import React, { useState, useEffect } from "react";
import JobList from './job-list/JobList';
import { Job } from '../../types/Job.types';
import '../job-experience/JobExperience.css';

const JobExperience: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true); // Agregar estado para controlar la carga

  useEffect(() => {
    fetch('https://65ed60630ddee626c9b18ac6.mockapi.io/api/jobs')
      .then(response => response.json())
      .then(data => {
        setJobs(data);
        setLoading(false); // Una vez cargados los trabajos, establecer loading en false
      })
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <section className="min-h-[100vh] bg-gradient-to-b from-black to-gray-950">
      <div className="py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl text-center md:text-left lg:text-left">
        <h1 className="text-2xl font-bold">Experiencia de Trabajo</h1>
        <div className="mt-[4rem]">
          <JobList jobs={jobs} loading={loading}/>
        </div>
      </div>
    </section>
  );
}

export default JobExperience;
