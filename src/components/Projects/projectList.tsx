import { useState } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../../data/projects-data";
import type { IProject } from "../../types/project-type";
import Card from "./card";

const ProjectsList = () => {
  const [projects] = useState<IProject[]>(projectsData);

  return (
    <>
      <div className="w-full flex justify-center items-center mt-8">
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
        <Card key={i.id} className="mt-10">
          <img
            src={i.image}
            alt="img"
            className="object-cover w-[300px] mx-auto h-[300px] rounded transition-transform duration-[1500ms] group-hover:scale-105 sm:w-[500px]"
          />
        </Card>
      ))}
    </>
  );
};
export default ProjectsList;
