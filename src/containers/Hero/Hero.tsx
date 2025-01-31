import React from "react";
import './Hero.css'
import BlurFade from "@/components/magicui/blur-fade";
import { RetroGrid } from "@/components/ui/retro-grid";
import { AuroraText } from "@/components/magicui/aurora-text";
import * as motion from "motion/react-client"

const Hero = () => {
  return (
    <section className="min-h-[100vh] flex justify-center align-middle">
      <div className="py-16 md:py-36 scroll-m-20 flex justify-center align-middle w-full mx-auto container lg:max-w-4xl md:max-w-2xl text-center">
        <div className="mx-auto flex justify-center flex-col gap-10">
          <div className="relative mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.8, filter: "blur(40px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.4, scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 }, }}
              className="flex justify-center">
              <img src="/pp.webp" className="w-[250px] lg:w-[350px] h-auto z-90" alt="" />
              <div className="mt-8 bg-black/[0.05] dark:bg-black/10 rounded-full absolute w-[16rem] h-[16rem] lg:w-[22.5rem] lg:h-[22.5rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
                <RetroGrid className="absolute top-0 left-0 w-full h-full rounded-full dark:opacity-20 shadow-2xl" />
              </div>
            </motion.div >
          </div>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl font-bold tracking-tighter md:text-5xl lg:text-7xl mb-3">
              Hola, soy <AuroraText>Andrés.</AuroraText>
            </h1>
            <BlurFade
              delay={0.5}>
              <p className="text-gray-500 sm:text-md lg:text-xl mb-4 sm:text-sm mx-auto"><span className="text-dark font-bold">FullStack Developer</span> con más de 6 años de experiencia en desarrollo, transformo ideas en soluciones concretas, bienvenid@ a mi portafolio!</p>
            </BlurFade>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;