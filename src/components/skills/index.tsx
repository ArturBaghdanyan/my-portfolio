import { useState } from "react";
import { useScrollAnimation } from "../../hooks/useAnimate";
import { listSkills } from "../../data/skills";
import type { Skill } from "../../types/skills";
import Card from "../Projects/card";

const MySkills = () => {
  const [skills] = useState<Skill[]>(listSkills);
  const [containerRef, isVisible] = useScrollAnimation();

  return (
    <Card>
      <h2
        className="title 
        w-3/5 sm:w-1/5 
        px-6 py-3 
        bg-white/10 backdrop-blur-sm 
        text-white/90 font-semibold 
        rounded-lg 
        hover:text-white hover:bg-white/20 
        transition-all duration-300"
      >
        Skills
      </h2>

      <div
        ref={containerRef}
        className={`w-full md:w-3/5 h-auto m-auto flex flex-wrap gap-x-4 gap-y-6 mt-8 justify-center rounded-xl bg-gradient-to-br from-blue-200 via-blue-200 to-indigo-200 shadow-lg p-3 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {skills.map((skill) => {
          const Icon = skill.imgSrc;
          return (
            <div
              key={skill.id}
              className="w-[110px] h-[40px] flex items-center justify-center gap-2 bg-white/40 backdrop-blur-md rounded transition-transform transform hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
            >
              {typeof skill.imgSrc === "string" ? (
                <img
                  src={skill.imgSrc}
                  alt={skill.text}
                  width={40}
                  height={40}
                  className="w-14 h-14"
                />
              ) : (
                <Icon width={40} height={40} className="text-indigo-700" />
              )}
              <span className="font-mono font-semibold text-xs text-gray-800">
                {skill.text}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default MySkills;
