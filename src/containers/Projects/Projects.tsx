'use client';

import React, { useEffect, useState } from "react";
import type { Projects, GithubProject } from '../../app/libs/types';
import ProjectCard from "../../components/pages/ProjectCard/ProjectCard";
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
          && project.visibility === 'public')
          .sort((a: { created_at: string }, b: { created_at: string }) => 
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );

        // Map projects
        const projects = topicsFilter.map((project: GithubProject, index: number) => {
          const { id, name, html_url, description, topics, created_at } = project;
          return {
            id,
            name:name,
            description: description,
            href: html_url,
            tecnologies: topics,
            date: created_at,
          }
        });
        setFeatures(projects);
      });
  }, []);

  return (
    <section className="min-h-[100vh] bg-black/[0.01]">
    <div className="py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-1xl text-center md:text-left lg:text-left">
        <h1 className="text-2xl font-bold">Proyectos</h1>
        <div className="mt-[4rem]">
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <ProjectCard key={feature.id} {...feature} />
              ))}
            </div>
        </div>
    </div>
</section>
  );
}


export default Projects;
