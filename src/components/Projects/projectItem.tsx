import { Link } from "react-router-dom";
import { useState } from "react";
import type { IProject } from "../../types/project-type";

interface ProjectProps {
  data: IProject;
}

export const ProjectItem = ({ data }: ProjectProps) => {
  const [showText, setShowText] = useState(false);

  return (
    <div className="w-4/5 h-auto flex flex-col justify-between mx-auto gap-y-6 p-3 mt-10 sm:text-lg xl:flex-row items-center my-8">
      <div
        className="flex flex-col gap-y-3 w-full p-4 md:p-6 rounded-xl transition-all duration-300 border border-white/10 bg-transparent text-white"
        style={{
          boxShadow:
            "0 20px 50px -12px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.05)",
        }}
      >
        <h2 className="text-2xl font-bold mb-2 text-center text-white">
          {data.title}
        </h2>

        <p className="text-blue-50 m-0 leading-relaxed opacity-90">
          {data.description}
        </p>

        {data?.features && (
          <button
            onClick={() => setShowText((prev) => !prev)}
            className="cursor-pointer text-red-400 font-bold my-2 text-center w-full hover:text-red-300 transition-colors flex items-center justify-center gap-2"
          >
            {showText ? "View less" : "View features"}
            <span
              className={`transition-transform duration-300 ${showText ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </button>
        )}

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showText ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/10 pt-4 mt-2">
            <h3 className="font-bold mb-3 text-blue-200">{data.features}</h3>
            <ul className="space-y-3 mb-4">
              {data.textList?.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-blue-50/80"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-[10px]">
                    ✔
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-4 mt-4">
          {data.site && (
            <Link
              to={data.site}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-[200px] relative text-white cursor-pointer rounded-lg text-xs md:text-sm p-2 md:px-4 md:py-2 font-bold border border-white/20 bg-gradient-to-r from-green-400/80 to-blue-500/80 backdrop-blur-sm transition-all duration-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/40">
                View Site
              </button>
            </Link>
          )}

          {data.link && (
            <Link
              to={data.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-[200px] relative text-white cursor-pointer rounded-lg text-xs md:text-sm p-2 md:px-4 md:py-2 font-bold border border-white/20 bg-gradient-to-r from-blue-500/80 to-purple-500/80 backdrop-blur-sm transition-all duration-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/40">
                View Code
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
