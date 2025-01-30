import React from 'react';

interface SkeletonProjectCardProps {
    quantity: number;
}

const SkeletonProjectCard: React.FC<SkeletonProjectCardProps> = ({ quantity }) => {
    const skeletonItems = [];
    for (let i = 0; i < quantity; i++) {
        skeletonItems.push(
            <div key={i} className="flex flex-col transition-all cursor-pointer bg-transparent border border-gray-200 rounded-xl md:flex-row w-full dark:border-slate-700 dark:hover:bg-slate-950/30">
                <div className="flex flex-col justify-between w-full">
                    <div className="flex flex-col justify-between p-4 leading-normal gap-2">
                        <div className="flex gap-4 flex-col md:flex-row-reverse lg:flex-row-reverse">
                            <div className="flex-shrink-0 w-full h-40 md:h-20 md:w-20 lg:h-20 lg:w-20 bg-transparent rounded-lg overflow-hidden border-[5px] border-transparent dark:border-slate-900 shadow-[0_0_0_1px_rgba(0,0,0,0.25)] shadow-slate-200 dark:shadow-slate-600">
                                <div className="w-full h-full bg-gray-300 dark:bg-slate-800 animate-pulse"></div>
                            </div>
                            <div className="flex flex-col flex-grow gap-2">
                                <div className="w-3/5 h-8 bg-gray-300 dark:bg-slate-800 rounded-lg animate-pulse"></div>
                                <div className="w-2/5 h-5 bg-gray-300 dark:bg-slate-800 rounded-lg animate-pulse"></div>
                                <div className="w-4/5 h-5 bg-gray-300 dark:bg-slate-800 rounded-lg animate-pulse"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-2">
                            <div className="w-16 h-5 bg-gray-300 dark:bg-slate-800 rounded-lg animate-pulse"></div>
                            <div className="w-16 h-5 bg-gray-300 dark:bg-slate-800 rounded-lg animate-pulse"></div>
                            <div className="w-16 h-5 bg-gray-300 dark:bg-slate-800 rounded-lg animate-pulse"></div>
                        </div>
                        <div className="flex gap-1 border-t dark:border-gray-800 pt-4">
                            <div className="w-20 h-8 bg-gray-300 dark:bg-slate-800 rounded-lg animate-pulse"></div>
                            <div className="w-20 h-8 bg-gray-300 dark:bg-slate-800 rounded-lg animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return <>{skeletonItems}</>;
};

export default SkeletonProjectCard;