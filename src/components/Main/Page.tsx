import MySkills from "../skills";
import AllProjects from "../Projects/allProjects";
import type { IProject } from "../../types/project-type";
import MyExperience from "../Experience";

interface MainPageProps {
  projects: IProject[];
  skillsSectionRef: React.RefObject<HTMLDivElement | null>;
  experienceSectionRef: React.RefObject<HTMLDivElement | null>;
  projectsSectionRef: React.RefObject<HTMLDivElement | null>;
}

export const MainPage = ({
  projects,
  skillsSectionRef,
  experienceSectionRef,
  projectsSectionRef,
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
          ref={projectsSectionRef}
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <AllProjects project={projects} />
        </section>
      </div>
    </main>
  );
};
