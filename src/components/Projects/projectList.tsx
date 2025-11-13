import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useAnimate";
import { projectsData } from "../../data/projects-data";
import type { IProject } from "../../types/project-type";
import Card from "./card";

const ProjectsList = () => {
  const [projects] = useState<IProject[]>(projectsData);
  const [containerRef, isVisible] = useScrollAnimation();

  return (
    <>
      <div
        ref={containerRef}
        className={`w-full flex justify-center items-center mt-8 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Link
          to="/projects"
          className="title px-6 py-3 bg-white/10 text-white/90         font-semibold 
            rounded-lg 
            hover:text-white hover:bg-white/20 
            transition-all duration-300"
        >
          View All Projects
        </Link>{" "}
      </div>
      <div className="relative w-32 mx-auto text-center py-3 mt-12 cursor-pointer rounded-xl shadow-[1px_1px_1px_1px_rgba(0,0,0,0.06)] bg-white/10 overflow-hidden">
        <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,#00ffea,transparent)] opacity-0 hover:opacity-100 transition-opacity duration-[2000ms]"></span>
        <span className="relative z-10 text-white font-bold text-xl">Featured</span>
      </div>
      {projects.slice(0, 1).map((i) => (
        <Card key={i.id} className="mt-10 animate-fadeIn relative">
          <div className="relative group w-fit mx-auto">
            <img
              src={i.image}
              alt="img"
              className="object-cover w-[300px] h-[300px] rounded transition-transform duration-[1500ms] group-hover:scale-105 sm:w-[400px] lg:w-[500px]"
            />

            <a
              href={i.site}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            >
              <span className="bg-black/60 text-white px-4 py-2 rounded-lg pointer-events-auto cursor-pointer">
                Open Project
              </span>
            </a>
          </div>
        </Card>
      ))}
    </>
  );
};
export default ProjectsList;
