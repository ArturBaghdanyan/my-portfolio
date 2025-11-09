import { useRef } from "react";

import WhoAmI from "../AboutPage";
import Header from "../header/header";
import ProjectsList from "../Projects/projectList";
import MySkills from "../skills";
import Footer from "./Footer";
import bgImage from "../../assets/bg.jpg";
import Article from "../Article";

const RootPage = () => {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);

  const divStyle = {
    backgroundImage: `url(${bgImage})`,
    width: "100%",
    height: "600px",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div className="bg-[linear-gradient(to_top,#304bff,transparent)]">
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
    </div>
  );
};

export default RootPage;
