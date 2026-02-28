import { useRef } from "react";

import Header from "../header/header";
import WhoAmI from "../AboutPage";
import ProjectsList from "../Projects/projectList";
import MySkills from "../skills";
import Article from "../Article";
import Footer from "./Footer";
import bgImage from "../../assets/bg.jpg";

const RootPage = () => {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);

  const divStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(5, 10, 24, 0.4), rgba(5, 10, 24, 1)), url(${bgImage})`,
    width: "100%",
    height: "700px",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column" as const,
  };
  return (
    <>
      <div style={divStyle}>
        <Header
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <WhoAmI />
      </div>

      <main className="flex flex-col mt-10 gap-y-12 container-spacing">
        <section ref={skillsRef}>
          <MySkills />
        </section>

        <section ref={projectsRef}>
          <ProjectsList />
        </section>

        <Article />
      </main>
      <Footer />
    </>
  );
};

export default RootPage;
