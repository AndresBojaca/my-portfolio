import React from "react";
import { getIconLogo } from "./icons";

const SkillPill = ({ skill }: { skill: string }) => {
  return (
    <div className="relative inline-flex items-center justify-center p-[2px] overflow-hidden text-[10px] font-medium text-dark rounded-full border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900">
    <div className="relative flex items-center gap-2 px-2 py-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full ">
      {skill ? getIconLogo(String(skill), 'size-4') : <span className="text-gray-500">⚙</span>}
      <span className="text-xs">{skill}</span>
    </div>
  </div>
  );
};

export default SkillPill;