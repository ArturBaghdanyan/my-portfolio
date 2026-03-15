import MySkills from "../skills";
import AllProjects from "../Projects/allProjects";
import type { IProject } from "../../types/project-type";

interface MainPageProps {
  projects: IProject[];
  skillsSectionRef: React.RefObject<HTMLDivElement | null>;
  experienceSectionRef: React.RefObject<HTMLDivElement | null>;
  projectsSectionRef: React.RefObject<HTMLDivElement | null>;
}

export const MainPage = ({
  projects,
  skillsSectionRef,
//   experienceSectionRef,
  projectsSectionRef,
}: MainPageProps) => {
  return (
    <main className="w-full pt-24 lg:w-[52%] lg:py-24 h-screen lg:overflow-y-auto">
      <div className="flex flex-col gap-y-12">
         <section ref={skillsSectionRef}>
          <MySkills />
        </section>

        {/* <section ref={experienceSectionRef}>
          <Article />
        </section> */}

        <section ref={projectsSectionRef}>
          <AllProjects project={projects} />
        </section>
      </div>
    </main>
  );
};
