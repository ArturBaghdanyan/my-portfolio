import { type FC } from "react";

import Card from "./card";
import type { IProject } from "../../types/project-type";
import { ProjectItem } from "./projectItem";

type IProjectType = {
  project: IProject[];
};
const AllProjects: FC<IProjectType> = ({ project }) => {
  return (
    <div className="grid grid-cols-1 font-montserrat">
      {project.map((i) => (
        <div key={i.id} className="mb-6">
          {/* <h1
            className="uppercase title 
        px-6 py-3 
        bg-white/10 backdrop-blur-sm 
        text-white/90 font-semibold 
        rounded-lg 
        hover:text-white hover:bg-white/20 
        transition-all duration-300"
          >
            {project.}
          </h1> */}
          <Card key={i.id}>
            <ProjectItem key={i.id} data={i} />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
