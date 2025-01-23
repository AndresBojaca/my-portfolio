'use client';

import React, { useEffect, useState } from "react";
import type { Projects, GithubProject } from '../../app/libs/types';
import ProjectCard from "../../components/Projects/ProjectCard";
import {
  BellIcon
} from "@radix-ui/react-icons";
import './Projects.css';

//TODO #1. Poner loader
//TODO #2. Poner mensaje de error

const fetchGithubRepos = async () => {
  const response = await fetch(`https://api.github.com/users/AndresBojaca/repos`)
  return response.json();
}

const Projects = () => {

  const [features, setFeatures] = useState<Projects[]>([]);


  useEffect(() => {



    fetchGithubRepos()
      .then(data => {
        // Filter by topics
        const topicsFilter = data.filter((project: { topics: string[], visibility: string }) => 
          project.topics 
          && 
          project.topics.includes('portfolio') 
          && project.visibility === 'public');

        // Map projects
        const projects = topicsFilter.map((project: GithubProject, index: number) => {
          const { id, name, html_url, description, topics } = project;
          return {
            id,
            name,
            description,
            url: html_url,
            topics
          }
        });

        setFeatures(projects);
        console.log(projects);

      });
  }, []);

  return (
    <section className="min-h-[100vh]">
    <div className="py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-1xl text-center md:text-left lg:text-left">
        <h1 className="text-2xl font-bold">Proyectos</h1>
        <div className="mt-[4rem]">
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <ProjectCard key={feature.id} name={feature.name} description={feature.description} href={feature.url} tecnologies={feature.topics} />
              ))}
            </div>
        </div>
    </div>
</section>
  );
}


export default Projects;
