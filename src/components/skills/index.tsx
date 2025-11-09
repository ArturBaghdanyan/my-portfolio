import { useState } from "react";

import { listSkills } from "../../data/skills";
import Card from "../Projects/card";
import type { Skill } from "../../types/skills";

const MySkills = () => {
  const [skills] = useState<Skill[]>(listSkills);

  return (
    <Card>
      <h2 className="title w-1/5 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
        Skills
      </h2>

      <div className="w-full md:w-3/5 h-auto m-auto flex flex-wrap gap-x-4 gap-y-6 mt-8 justify-center rounded-xl bg-gradient-to-br from-blue-200 via-blue-200 to-indigo-200 shadow-lg p-3">
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
