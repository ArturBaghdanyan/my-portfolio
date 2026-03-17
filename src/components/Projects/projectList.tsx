import { useState } from "react";
import { projectsData } from "../../data/projects-data";
import type { IProject } from "../../types/project-type";
import Card from "./card";

import "./style.css"

const ProjectsList = () => {
  const [projects] = useState<IProject[]>(projectsData);

  return (
    <>
      {projects.slice(0, 1).map((i) => (
        <Card key={i.id} className="mt-10 relative animate-fadeIn">
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
