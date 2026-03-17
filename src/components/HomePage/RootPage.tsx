import { useState, useEffect, useRef } from "react";
import { MainPage } from "../Main/Page";
import AboutPage from "../AboutPage";

import { projectsData } from "../../data/projects-data";
import type { IProject } from "../../types/project-type";
import { AiFillCodepenCircle } from "react-icons/ai";

const RootPage = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  const skillsSectionRef = useRef<HTMLDivElement | null>(null);
  const experienceSectionRef = useRef<HTMLDivElement | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="lg:flex lg:justify-between lg:gap-4 container-spacing">
      <div className="fixed top-2 left-0">
        <AiFillCodepenCircle className="animate-spin w-8 h-8 text-green-500" />
      </div>
      <AboutPage
        onSkillsClick={() => scrollTo(skillsSectionRef)}
        onExperienceClick={() => scrollTo(experienceSectionRef)}
        onProjectsClick={() => scrollTo(projectsSectionRef)}
      />
      <MainPage
        projects={projects}
        skillsSectionRef={skillsSectionRef}
        experienceSectionRef={experienceSectionRef}
        projectsSectionRef={projectsSectionRef}
      />
    </div>
  );
};

export default RootPage;
