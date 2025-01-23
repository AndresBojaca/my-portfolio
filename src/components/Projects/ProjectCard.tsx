import React from "react";
import type { ProjectCard } from '../../app/libs/types';
import SkillPill from "../ui/skillPill";

const ProjectCard = ({ name, description, href, tecnologies }: ProjectCard) => {
  return (
    <a href={href} target="_blank" className="flex flex-col transition-all items-center bg-transparent border border-gray-300 rounded-lg shadow md:flex-row md:max-w-xl hover:dar:bg-slate-700 hover:bg-gray-100 dark:border-slate-700 dark:hover:bg-slate-700">
      <div className="flex flex-col items-center justify-between w-full md:flex-row">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-dark dark:text-white">{name}</h5>
          <p className="mb-3 text-base text-dark dark:text-white opacity-60">{description}</p>
          <div className="flex flex-wrap gap-2">
            {
              tecnologies.map((tecnology, index) => (
                <SkillPill key={index} skill={tecnology} />
              ))
            }
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
