import { type FC } from "react";

import Card from "./card";
import type { IProject } from "../../types/project-type";
import { ProjectItem } from "./projectItem";

import style from "./style.module.scss";

type IProjectType = {
  project: IProject[];
};
const AllProjects: FC<IProjectType> = ({ project }) => {
  return (
    <div className={`${style.all_projects}`}>
      {project.map((i) => (
        <Card key={i.id}>
          <ProjectItem key={i.id} data={i} />
        </Card>
      ))}
    </div>
  );
};

export default AllProjects;
