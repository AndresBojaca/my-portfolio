import React from "react";
import { cn } from "../../app/libs/utils";
import './Hero.css'
import Bubbles from "@/components/ui/bubbles";
import { ChevronDown } from "lucide-react";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { RetroGrid } from "@/components/ui/retro-grid";
import { AuroraText } from "@/components/ui/aurora-text";

const Hero = () => {
  return (
    <section className="min-h-[100vh] flex align-middle justify-center p-10 md:p-20 lg:p-24 xl:px-0 py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-1xl text-center">
      <div className="mx-auto flex justify-center flex-col">
        <div className="relative mx-auto">
          <div className="flex justify-center -mb-5">
            <img src="/pp.webp" className="z-90" alt="" width="530px" height="auto" />
            <div className="mt-10 bg-black/[0.05] dark:bg-black/10 rounded-full absolute w-[25rem] h-[25rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
              {/* <Bubbles className="opacity-10 dark:opacity-5 rounded-[2rem] z-0" /> */}
              <RetroGrid className="absolute top-0 left-0 w-full h-full rounded-full dark:opacity-20 shadow-2xl" />
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl mb-3">
             Hola, soy <AuroraText>Andrés</AuroraText>
          </h1>
          <p className="text-dark sm:text-md lg:text-xl mb-4 sm:text-sm mx-auto"><span className="text-dark font-bold">FullStack Developer</span> con más de 6 años de experiencia en desarrollo, transformo ideas en soluciones concretas, bienvenid@ a mi portafolio!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero;