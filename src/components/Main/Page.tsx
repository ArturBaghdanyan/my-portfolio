import MySkills from "../skills";
import AllProjects from "../Projects/allProjects";
import type { IProject } from "../../types/project-type";
import MyExperience from "../Experience";
import { freelanceProjectsData } from "../../data/freelance";

interface MainPageProps {
  projects: IProject[];
  skillsSectionRef: React.RefObject<HTMLDivElement | null>;
  experienceSectionRef: React.RefObject<HTMLDivElement | null>;
  projectsSectionRef: React.RefObject<HTMLDivElement | null>;
  freelanceProjectsSectionRef: React.RefObject<HTMLDivElement | null>;
}

export const MainPage = ({
  projects,
  skillsSectionRef,
  experienceSectionRef,
  projectsSectionRef,
  freelanceProjectsSectionRef,
}: MainPageProps) => {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      <div className="flex flex-col gap-y-12">
        <section
          ref={skillsSectionRef}
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <MySkills />
        </section>

        <section ref={experienceSectionRef}>
          <MyExperience />
        </section>

        <section
          ref={freelanceProjectsSectionRef}
          className="mt-16 scroll-mt-16 md:mb-24 lg:mb-8 lg:scroll-mt-24"
        >
          <h1
            className="uppercase title 
            px-6 py-3 
            bg-white/10 backdrop-blur-sm 
            text-white/90 font-semibold 
            rounded-lg 
            hover:text-white hover:bg-white/20 
            transition-all duration-300"
          >
            Freelance Projects
          </h1>

          <AllProjects project={freelanceProjectsData} />
        </section>

        <section
          ref={projectsSectionRef}
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <h1
            className="uppercase title 
            px-6 py-3 
            bg-white/10 backdrop-blur-sm 
            text-white/90 font-semibold 
            rounded-lg 
            hover:text-white hover:bg-white/20 
            transition-all duration-300"
          >
            Personal Projects
          </h1>
          <AllProjects project={projects} />
        </section>
      </div>
    </main>
  );
};
