import React from "react";
import ProjectCard from "../components/projectCard.js";
import boardbg from "../images/bulletinboard.jpg"


import babyLogo from "../images/baby-on-the-go-LOGO.png";
import stackImg from "../images/Sawyer-stack-attack.png";
import geniusImg from "../images/Genius.png";
import robotGif from "../images/test3.gif";
import csLogo from "../images/cs161-logo.png";
import slasherImg from "../images/Slayer.png";
import berkeleyImg from "../images/berkeley-lab-log.png";
import projects from "../data/projectsData";

export default function Projects() {
  

  return (
    <section
      style={{ fontFamily: 'Impact, Charcoal, sans-serif' }}
      id="projects"
      className="snap-start bg-gray-100 bg-cover bg-center bg-no-repeat md:px-20 pt-32"
    >
      <div className="max-w-5xl mx-auto mb-10 p-6 md:p-10 ">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Projects</h2>
        <p 
        className="text-gray-800 text-base md:text-lg leading-relaxed"
        style={{ fontFamily: "'Roboto Mono', monospace" }}>
          I’ve worked on personal, academic, and community projects—individually
          and with teams. Some repos are private; reach out if you’d like access. 😁
        </p>
      </div>

      {/* Responsive small-tile grid */}
      <div
        className="mx-auto mt-6 grid gap-4
                   grid-cols-2
                   sm:grid-cols-3
                   lg:grid-cols-4
                   xl:grid-cols-5
                   2xl:grid-cols-6
                   max-w-4xl"
      >
        {projects.map((p,i) => (
          <div key={p.title} className="w-full max-w-[200px] h-[280px] mx-auto">
            <ProjectCard {...p} tilt = {Math.floor(Math.random() * 9) - 4} />
          </div>
        ))}
      </div>
    </section>
  );
}
