'use client';

import React, { useEffect, useState } from "react";
import type { Projects, GithubProject } from '../../app/libs/types';
import ProjectCard from "../../components/pages/ProjectCard/ProjectCard";
import SkeletonProjectCard from "@/components/pages/ProjectCard/SkeletonProjectCard";
import './Projects.css';

//TODO #1. Poner loader
//TODO #2. Poner mensaje de error

const fetchGithubRepos = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/AndresBojaca/repos`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

const Projects = () => {

  const [features, setFeatures] = useState<Projects[]>([]);
  const [loading, setLoading] = useState(true);

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
            name: name,
            description: description,
            href: html_url,
            tecnologies: topics,
            date: created_at,
          }
        });
        setFeatures(projects);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setLoading(false);
        // Handle error state here if needed
      });
  }, []);

  return (
    <section className="min-h-[100vh]">
      <div className="py-16 md:py-36 scroll-m-20 flex flex-col justify-center align-middle w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
        <h1 className="text-2xl font-bold">Proyectos</h1>
        <div className="mt-[4rem]">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4">
            {loading ? <SkeletonProjectCard quantity={6} /> : (
              features.map((feature) => (
                <ProjectCard key={feature.id} {...feature} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
