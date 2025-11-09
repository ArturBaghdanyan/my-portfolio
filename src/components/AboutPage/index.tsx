import { useState, useEffect, useRef } from "react";
import programmer from "../../assets/programmer.png";

import style from "./style.module.scss";

const AboutPage = () => {
  const imgRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [scrollTriggered, setScrollTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollTriggered(true);
      } else {
        setScrollTriggered(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-[93.5%] m-auto flex flex-col md:flex-row items-center justify-between container-spacing overflow-hidden gap-8 bg-[linear-gradient(to_top_right,#304bff,transparent)]">
      <div
        ref={textRef}
        className={`w-[55%] flex flex-col ${
          scrollTriggered ? style.animateFromBottomLeft : style.animateFromLeft
        }`}
      >
        <h1 className="text-lg text-center font-bold text-white italic bg-green-300 rounded-xl w-3/5 px-2">
          Hi There!
          <br /> I’m Arthur Baghdanyan
        </h1>
       
        <div> 
            {/* className="border-2 text-green-300 rounded-xl bg-[linear-gradient(to_top,#304bff,transparent)]" */}
          <p className="text-white px-3 text-2xl rounded-lg">
            I’m a{" "}
            <b className="font-extrabold text-red-600 italic">
              Front-End Developer,{" "}
            </b>{" "}
            who turns ideas into smooth, interactive experiences that feel
            natural to use.
          </p>
        </div>

        <p className="text-white text-xs pr-6 pl-3">
          My goal is to create interfaces that leave a lasting impression,
          invite users to return, and keep every interaction smooth and
          functional.
        </p>

      
      </div>
      <div
        ref={imgRef}
        className={`w-[45%] flex justify-center ${
          scrollTriggered
            ? style.animateFromBottomRight
            : style.animateFromRight
        }`}
      >
        <img
          src={programmer}
          alt="programmer"
          className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[250px] md:h-[250px] object-contain"
        />
      </div>
    </div>
  );
};

export default AboutPage;
