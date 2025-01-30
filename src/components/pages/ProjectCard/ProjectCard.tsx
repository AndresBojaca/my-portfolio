import React, { useEffect } from "react";
import type { ProjectCard } from '../../../app/libs/types';
import SkillPill from "../../ui/skillPill";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";


const ProjectCard = ({ id, name, description, href, tecnologies, date }: ProjectCard) => {

  const placeHolder = `https://fakeimg.pl/600x400/f5f5f5/909090?text=</>&font=museo&font_size=90`;
  const [imageSrc, setImageSrc] = React.useState(placeHolder);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`https://raw.githubusercontent.com/AndresBojaca/${name}/refs/heads/main/cover.webp`);
        if (response.status === 200) {
          const imgBlob = await response.blob();
          const imgURL = URL.createObjectURL(imgBlob);
          setImageSrc(imgURL);
        } else {
          setImageSrc(placeHolder);
        }
      } catch (error) {
        setImageSrc(placeHolder);
      }
    };

    fetchImage();
  }, [name]);

  return (
    <div className="flex flex-col transition-all cursor-pointer bg-transparent border border-gray-200 rounded-xl md:flex-row w-full hover:dar:bg-slate-700 hover:bg-gray-100 dark:border-slate-700 dark:hover:bg-slate-950/30">
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col justify-between p-4 leading-normal gap-2">
          <div className="flex gap-4 flex-col md:flex-row-reverse lg:flex-row-reverse">
            <div className="flex-shrink-0 w-full h-40 md:h-20 md:w-20 lg:h-20 lg:w-20 bg-transparent rounded-lg overflow-hidden border-[5px] border-transparent dark:border-slate-900 shadow-[0_0_0_1px_rgba(0,0,0,0.25)] shadow-slate-200 dark:shadow-slate-600">
              <img src={imageSrc} className="object-cover w-full h-full transition duration-300 scale-[1.05] hover:scale-[1]" loading="lazy" alt="" />
            </div>
            <div className="flex flex-col flex-grow gap-2">
              <h5 className="text-xl font-bold tracking-tight text-dark dark:text-light">{name}</h5>
              <p className="text-xs">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
              <p className="mb-3 text-base text-gray-500 dark:text-slate-600">{description}</p>
            </div>
          </div>
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
