import React from "react";
import './JobExperience.css';
import JobList from '@/components/pages/JobList/JobList';


const JobExperience = () => {

  return (
    <section className="min-h-[100vh]">
      <div className="py-16 md:py-36 scroll-m-20 w-full mx-auto lg:max-w-4xl md:max-w-2xl text-center md:text-left lg:text-left">
        <h1 className="text-2xl font-bold">Experiencia de Trabajo</h1>
        <div className="mt-[4rem]">
          <JobList />
        </div>
      </div>
    </section>
  );
}

export default JobExperience;
