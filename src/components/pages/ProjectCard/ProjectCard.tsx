import React from "react";
import type { ProjectCard } from '../../../app/libs/types';
import SkillPill from "../../ui/skillPill";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";

const ProjectCard = ({ id, name, description, href, tecnologies, date }: ProjectCard) => {
  return (
    <div className="flex flex-col transition-all cursor-pointer bg-transparent border border-gray-200 rounded-xl md:flex-row md:max-w-xl hover:dar:bg-slate-700 hover:bg-gray-100 dark:border-slate-700 dark:hover:bg-slate-950/30">
      <div className="flex flex-col justify-between w-full md:flex-row">
        <div className="flex flex-col justify-between p-4 leading-normal gap-2">
          <div className="bg-slate-200 rounded-xl w-full h-40 overflow-hidden">
            <img src={`https://raw.githubusercontent.com/AndresBojaca/${name}/refs/heads/main/cover.webp`} className=" object-cover w-full h-full transition duration-300 scale-[1.05] hover:scale-[1] rounded-xl" loading="lazy" alt=""/>
          </div>
          <h5 className="text-xl font-bold tracking-tight text-dark dark:text-light">{name}</h5>
            <p className="text-xs">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
          <p className="mb-3 text-base text-gray-500 dark:text-slate-600">{description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {
              tecnologies.map((tecnology, index) => (
                <SkillPill key={index} skill={tecnology} />
              ))
            }
          </div>
          <div className="flex gap-1 border-t dark:border-gray-800 pt-4">
            <a href={href} target="_blank" className="flex gap-1 text-white dark:text-slate-800 bg-slate-800 dark:bg-slate-100 font-medium rounded-lg text-xs px-2.5 py-1.5 text-center">Código <GitHubLogoIcon /></a>
            <a target="_blank" type="button" className="flex gap-1 text-white dark:text-slate-800 bg-slate-800 dark:bg-slate-100 font-medium rounded-lg text-xs px-2.5 py-1.5 text-center">Demo <GlobeIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
