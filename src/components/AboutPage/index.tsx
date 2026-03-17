import { useRef } from "react";

import Contact from "../Contact";
// import hi from "../../assets/hi.png";

// import style from "./style.module.scss";

interface AboutPageProps {
  onSkillsClick: () => void;
  onExperienceClick: () => void;
  onProjectsClick: () => void;
}

const AboutPage = ({
  onSkillsClick,
  onExperienceClick,
  onProjectsClick,
}: AboutPageProps) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div
        ref={textRef}
        className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24"
      >
        <div className="flex flex-col gap-y-3 h-full">
          <div className="flex items-center gap-x-1 gap-y-0 w-full md:mx-0 md:text-lg">
            {/* <img
              src={hi}
              alt="hi"
              width={30}
              height={30}
              className={`${style.animateSlideX}`}
            /> */}
            <p className="pl-5 text-xl sm:text-4xl md:text-3xl font-bold text-white font-montserrat">
              Arthur Baghdanyan
            </p>
          </div>

          <div className="flex flex-col gap-y-3 pl-5 text-[#d5d5d5]">
            <p className="font-montserrat text-sm rounded-lg">
              <b>Front-End | Full-Stack Software Engineer</b>
            </p>
            <span className="w-2/3">
              I build web applications from pixel to server clean interfaces.
            </span>
          </div>

          <div className="hidden gap-y-6 mt-[70px] lg:flex lg:flex-col lg:gap-y-3 pl-5 text-[#d5d5d5]">
            <div
              onClick={onSkillsClick}
              className="flex items-center gap-x-6 text-white cursor-pointer hover:text-green-400 transition-colors"
            >
              <div className="w-12 h-2 border-t-1 mt-3"></div>
              <span className="uppercase">Skills</span>
              <div className="w-12 h-2 border-t-1 mt-3"></div>
            </div>
            <div
              onClick={onExperienceClick}
              className="flex items-center gap-x-6 text-white cursor-pointer hover:text-green-400 transition-colors"
            >
              <div className="w-12 h-2 border-t-1 mt-3"></div>
              <span className="uppercase">Experience</span>
              <div className="w-12 h-2 border-t-1 mt-3"></div>
            </div>
            <div
              onClick={onProjectsClick}
              className="flex items-center gap-x-6 text-white cursor-pointer hover:text-green-400 transition-colors"
            >
              <div className="w-12 h-2 border-t-1 mt-3"></div>
              <span className="uppercase">Projects</span>
              <div className="w-12 h-2 border-t-1 mt-3"></div>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default AboutPage;
