import { useState, useEffect, useRef } from "react";
import programmer from "../../assets/programmer.png";
import hi from "../../assets/hi.png";

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
    <div className="w-full h-[93.5%] m-auto flex flex-col justify-center md:flex-row items-center justify-between container-spacing overflow-hidden gap-8 bg-[linear-gradient(to_top_right,#304bff,transparent)]">
      <div
        ref={textRef}
        className={`w-full md:w-[55%] flex flex-col gap-y-3 p-4
 ${scrollTriggered ? style.animateFromBottomLeft : style.animateFromLeft}`}
      >
        <div className="flex items-center gap-x-5 gap-y-0 w-full md:mx-0 md:text-lg px-2">
          <img
            src={hi}
            alt="hi"
            width={30}
            height={30}
            className={`${style.animateSlideX}`}
          />
          <div className="flex flex-col">
            <b className="text-green-400 text-2xl">Hi There!</b>
            <p className="text-2xl sm:text-3xl font-bold text-white italic">
              I’m Arthur Baghdanyan
            </p>
          </div>
        </div>

        <div>
          <p className="text-black px-3 text-2xl rounded-lg">
            I’m a{" "}
            <b className="font-extrabold text-white italic text-3xl">
              Front-End Developer,{" "}
            </b>{" "}
            who turns ideas into smooth, interactive experiences that feel
            natural to use.
          </p>
        </div>

        <p className="text-white text-sm pr-6 pl-3 font-roboto">
          My goal is to create interfaces that leave a lasting impression,
          invite users to return, and keep every interaction smooth and
          functional.
        </p>
      </div>
      <div
        ref={imgRef}
        className={`w-full md:w-[45%] flex justify-center ${
          scrollTriggered
            ? style.animateFromBottomRight
            : style.animateFromRight
        }`}
      >
        <img
          src={programmer}
          alt="programmer"
          className="w-[300px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[250px] md:h-[250px]
            object-contain
            transition-transform duration-300
            scale-[1.5]
            sm:scale-[1]
            hover:scale-110"
        />
      </div>
    </div>
  );
};

export default AboutPage;
