import { useState } from "react";
import { experienceData } from "../../data/experience";

const MyExperience = () => {
  const [list] = useState(experienceData);
  const toolsToHighlight = [
    "HTML",
    "Css",
    "Scss",
    "Javascript",
    "Typescript",
    "React JS",
    "Redux",
    "Vue.js",
    "Vue.js/Vuex",
    "RTK Query",
    "Next.js 15",
    "Socket.io",
    "PostgreSQL",
    "JWT",
    "RBAC",
    "API",
  ];

  const formatDescription = (text: string) => {
    if (!text) return text;

    // Create a regex pattern from the tools array
    const pattern = new RegExp(`(${toolsToHighlight.join("|")})`, "gi");
    const parts = text.split(pattern);

    return parts.map((part, index) =>
      toolsToHighlight.some(
        (tool) => tool.toLowerCase() === part.toLowerCase(),
      ) ? (
        <span
          key={index}
          className="mx-1 px-1.5 py-0.5 text-xs font-medium border border-orange-400/40 bg-orange-400/10 text-orange-300 rounded-md"
        >
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <div className="flex flex-col gap-y-10 font-montserrat">
      <h1
        className="uppercase title 
        px-6 py-3 
        bg-white/10 backdrop-blur-sm 
        text-white/90 font-semibold 
        rounded-lg 
        hover:text-white hover:bg-white/20 
        transition-all duration-300"
      >
        experience
      </h1>
      {list.map((item, index) => (
        <div
          key={index}
          className="group flex flex-col sm:flex-row gap-x-8 text-[#b9b7b7]"
        >
          <span className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 w-32 shrink-0">
            {item.dateRange}
          </span>
          <div className="flex-1">
            <div>
              <h2 className="text-orange-400 font-bold">{item.jobTitle}</h2>
              <span className="mb-3">{item.company}</span>
            </div>
            <div className="mt-4 space-y-3 leading-relaxed">
              {item.description.map((desc, idx) => (
                <p key={idx} className="text-sm">
                  {formatDescription(desc)}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyExperience;
