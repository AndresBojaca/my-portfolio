import React from "react";

interface Props {
  cant: number;
}

const SkeletonJobList: React.FC<Props> = ({ cant }) => {
  const skeletonItems = [];
  for (let index = 0; index < cant; index++) {
    skeletonItems.push(
      <div key={index} className="animate-pulse w-full mb-4 ml-[-5px]">
        <div className="flex gap-3">
          <div className="h-4 w-[39px] h-[35px] bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
          <div className="flex flex-col mt-3 w-full">
            <div className="h-4 w-40 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2.5 w-full bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
            <div className="h-2.5 w-full bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-4"></div>
          </div>
        </div>
      </div>
    );
  }

  return <>{skeletonItems}</>;
};

export default SkeletonJobList;
