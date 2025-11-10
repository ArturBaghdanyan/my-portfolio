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
          className="title px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 hover:scale-110 transition transform duration-300 ease-in-out"
        >
          View All Projects
        </Link>{" "}
      </div>
      <div className="w-32 border-2 border-solid border-green-300 mx-auto rounded-xl text-center py-3 mt-12 text-white rounded-lg hover:bg-green-700 cursor-pointer bg-[linear-gradient(to_top,_#005959,_transparent)] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.06)]">
        Featured
      </div>{" "}
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
