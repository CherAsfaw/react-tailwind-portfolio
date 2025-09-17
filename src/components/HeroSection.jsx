import React from 'react'
import {ArrowDown} from "lucide-react"

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen  flex flex-col items-center justify-center px-4 py-24"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Chernet
            </span>
            <span className="ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Asfaw
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground text-justify opacity-0 animate-fade-in-delay-3">
            I’m a full‑stack developer with a passion for building stellar web
            experiences. Specializing in front‑end development, I design
            interfaces that are not only visually appealing but also highly
            functional and accessible. Proficient in the MERN stack (MYSQL,
            Express, React, Node.js), I deliver end‑to‑end solutions—from robust
            back‑end APIs to responsive, interactive user interfaces. I thrive
            in collaborative environments, emphasize performance, testability,
            and maintainability, and continuously explore the latest web
            technologies to push the boundaries of what’s possible online
          </p>
          <div className="py-4 opacity-0 animate-fade-in-delay-4">
            <a href="#project" className="cosmic-button ">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce ">
        <span className="text-sm text-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
}

export default HeroSection