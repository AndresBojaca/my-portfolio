import React from "react";
import { getIconLogo } from "./icons";

const SkillPill = ({ skill }: { skill: string }) => {
  return (
    <div className="relative inline-flex items-center justify-center p-[2px] overflow-hidden text-[10px] font-medium text-dark rounded-lg border border-gray-200 dark:border-gray-800 bg-transparent">
    <div className="relative flex items-center gap-2 px-2 py-0.5 ">
      <span className="">
        {skill ? getIconLogo(String(skill).toLocaleLowerCase(), 'size-4') : <>⚙</>}
      </span>
      <span className="text-xs capitalize">{skill}</span>
    </div>
  </div>
  );
};

export default SkillPill;