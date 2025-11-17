import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllProjects from "./allProjects";
import { projectsData } from "../../data/projects-data";
import type { IProject } from "../../types/project-type";

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const text = 'All Projects'
  const brackets = '{'
  const brackets2 = '}'
  return (
    <div className="container-spacing">
      <div className="w-full flex justify-between items-center mt-8">
        <Link
          to="/"
          className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
        >
          Back to Home
        </Link>
        <h1 className="text-white flex gap-x-3 text-xl sm:text-3xl"><span className="text-green-300">{brackets}</span>{text}<span className="text-green-300">{brackets2}</span></h1>
      </div>

      <AllProjects project={projects} />
    </div>
  );
};

export default Projects;
