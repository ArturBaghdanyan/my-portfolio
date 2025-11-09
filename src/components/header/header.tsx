import { useState, type FC, type RefObject } from "react";
import { AiFillCodepenCircle } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";

import style from "./style.module.css";
import Contact from "../Contact";

interface IProps {
  skillsRef: RefObject<HTMLDivElement | null>;
  projectsRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
}

const Header: FC<IProps> = ({ skillsRef, projectsRef, contactRef }) => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const executeScroll = (targetRef: RefObject<HTMLDivElement | null>) => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
      setShowNav(false);
    }
  };

  const clickItems = () => setShowNav(!showNav);

  return (
    <header
      className={`${style.header} w-full flex justify-center text-white relative h-[40px] justify-start mx-auto bg-[#194ea3] container-spacing`}
    >
      <div className="w-full flex items-center justify-between container-spacing">
        {/* <ul
          className={`${style.header_container_nav} hidden uppercase cursor-pointer gap-3 no-underline md:flex lg:flex xl:flex`}
        >
          <li onClick={() => executeScroll(myRef)} className="relative grow">
            Home
          </li>
          <li onClick={() => executeScroll(aboutRef)} className="relative grow">
            About
          </li>
          <li
            onClick={() => executeScroll(skillsRef)}
            className="relative grow"
          >
            Skills
          </li>
          <li
            onClick={() => executeScroll(projectsRef)}
            className="relative grow"
          >
            Projects
          </li>
          <li
            onClick={() => executeScroll(contactRef)}
            className="relative grow"
          >
            Contact
          </li>
        </ul> */}

        <AiFillCodepenCircle className="animate-spin w-8 h-8" />
        {/* <button className="flex w-8 h-8 cursor-pointer" onClick={clickItems}>
          <IoMdMenu className="w-full h-auto text-black" />
        </button> */}
        <Contact />
      </div>

      <div
        style={{ zIndex: 99 }}
        className={`${style.transitionOpacity} ${
          showNav ? style.transitionOpacity_active : ""
        } fixed top-0 right-0 w-64 min-h-screen pt-14 px-10 bg-[#2F4F4F] text-[rgb(234,179,8)] flex flex-col items-center gap-5 overflow-x-hidden`}
      >
        <button
          className="w-8 h-8 text-white fixed z-10 top-4 right-1 text-center cursor-pointer"
          onClick={clickItems}
        >
          x
        </button>
        <ul className="relative flex flex-col items-center gap-y-5 border-y-gray-200 py-5 px-2 cursor-pointer">
          <li onClick={() => executeScroll(skillsRef)}>Skills</li>
          <li onClick={() => executeScroll(projectsRef)}>Projects</li>
          <li onClick={() => executeScroll(contactRef)}>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
