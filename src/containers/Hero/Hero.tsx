import React from "react";
import { cn } from "../../app/libs/utils";
import './Hero.css'
import DotPattern from "../../components/magicui/dot-pattern";

const Hero = () => {
  return (
    <section className="min-h-[100vh] flex align-middle justify-center bg-dark">
      <div className="grid grid-cols-1 z-10">
        <div className="place-self-center text-center w-full relative">
          <div className="hero-elements">
            <h1 className="pb-1 text-3xl md:text-5xl lg:text-6xl lg:leading-[1.3] [text-shadow:_0px_0px_25px_ black] bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-blue-500">Hola, Soy<strong> Andrés Bojacá.</strong></h1>
            <h1 className="font-bold pb-1 text-3xl md:text-5xl lg:text-6xl lg:leading-[1.3] [text-shadow:_0px_0px_25px_ black]"></h1>
            <p className="text-dark text-[14px] sm:text-md lg:text-base mb-4 sm:text-sm max-w-[53rem] mx-auto">Apasionado por la tecnología y la innovación, he creado este portafolio para mostrarte mis proyectos destacados, donde transformo ideas en soluciones concretas. Con más de <span className="text-dark font-bold">6 años de experiencia en desarrollo</span>, me encanta aprender sobre temas de innovación. ¡Bienvenid@ a mi portafolio!
            </p>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Saber más
              </span>
            </button>
          </div>
          <div className="profile-picture">
            <img src="/pp.webp" className="absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-[55%] drop-shadow-[10px_25px_30px_rgba(0,0,0,0.3)]" style={{ maskImage: 'linear-gradient(to top, transparent 15%, black 45%)' }} alt="" width="650px" height="auto" />
          </div>
        </div>
      </div>

        <DotPattern
          width={20}
          height={20}
          cx={1.5}
          cy={1.5}
          cr={1.5}
          fill={'fill-gray-400/30'}
          className={cn(
            "[mask-image:linear-gradient(to_top,transparent_25%,red_75%)] ",
          )}
        />

    </section>
  )
}

export default Hero;