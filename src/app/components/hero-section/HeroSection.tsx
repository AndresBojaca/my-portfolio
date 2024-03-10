import React from "react";
import '../hero-section/HeroSection.css'

const HeroSection = () => {
  return (
    <section className="min-h-[100vh] flex align-middle justify-center">
      <div className="grid grid-cols-1 z-10">
        <div className="place-self-center text-center w-full relative">
          <div className="hero-elements">
            <h1 className="font-bold pb-1 text-3xl sm:text-4xl sm:text-sm md:text-5xl lg:text-6xl lg:leading-[1.3] ">Hola, Soy Andrés Bojacá. <p className="font-normal">Full Stack Developer</p></h1>
            <p className=" text-gray-400 lg:text-lg mb-4 sm:text-sm max-w-4xl">¡Hola! Soy Andrés Bojacá, apasionado por la tecnología y la innovación. Aquí encontrarás mis proyectos destacados, donde transformo ideas en soluciones concretas. ¡Bienvenido a mi portafolio!
            </p>
            <button className=" bg-sky-600 py-4 px-8">Saber más</button>
          </div>
          <div className="profile-picture">
            <img src="https://i.imgur.com/bJhzEkj.png" className="absolute shadow-sky-400 top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="" width="600px" height="auto" />
          </div>
        </div>
      </div>
      <div className="grid-background z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cuadricula" patternUnits="userSpaceOnUse" x="5" y="5" width="70" height="70">
              <g id="grupoDeLineas" stroke="rgba(255,255,255,0.2)">
                <line x1="0" y1="0" x2="0" y2="70" />
                <line x1="0" y1="70" x2="70" y2="70" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cuadricula)" />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection;