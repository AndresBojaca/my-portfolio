import React from "react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import './Projects.css';
import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
} from "@radix-ui/react-icons";


const features = [
    {
        Icon: FileTextIcon,
        name: "Save your files",
        description: "We automatically save your files as you type.",
        href: "/",
        cta: "Learn more",
        background: <img src="https://picsum.photos/1920/1080" className="absolute w-full h-full bg-cover opacity-30" />,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        Icon: InputIcon,
        name: "Full text search",
        description: "Search through all your files in one place.",
        href: "/",
        cta: "Learn more",
        background: <img src="https://picsum.photos/1920/1080" className="absolute w-full h-full bg-cover opacity-30" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: GlobeIcon,
        name: "Multilingual",
        description: "Supports 100+ languages and counting.",
        href: "/",
        cta: "Learn more",
        background: <img src="https://picsum.photos/1920/1080" className="absolute w-full h-full bg-cover opacity-30" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
        Icon: CalendarIcon,
        name: "Calendar",
        description: "Use the calendar to filter your files by date.",
        href: "/",
        cta: "Learn more",
        background: <img src="https://picsum.photos/1920/1080" className="absolute w-full h-full bg-cover opacity-30" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: BellIcon,
        name: "Notifications",
        description:
            "Get notified when someone shares a file or mentions you in a comment.",
        href: "/",
        cta: "Learn more",
        background: <img src="https://picsum.photos/1920/1080" className="absolute w-full h-full bg-cover opacity-30" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
];

const Projects = () => {

    return (
        <section className="min-h-[100vh] bg-black bg-opacity-5">
            <div className="py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl text-center md:text-left lg:text-left">
                <h1 className="text-2xl font-bold">Proyectos</h1>
                <div className="mt-[4rem]">
                    <BentoGrid className="lg:grid-rows-3">
                        {features.map((feature) => (
                            <BentoCard key={feature.name} {...feature}/>
                        ))}
                    </BentoGrid>
                </div>
            </div>
        </section>
    );
}


export default Projects;
