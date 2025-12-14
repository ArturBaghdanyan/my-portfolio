import { Link } from "react-router-dom";
import type { IProject } from "../../types/project-type";
import { useState } from "react";

interface ProjectProps {
  data: IProject;
}

export const ProjectItem: React.FC<ProjectProps> = ({ data }) => {
  const [showText, setShowText] = useState(false);

  return (
    <div className="w-4/5 h-auto flex flex-col justify-between mx-auto gap-y-4 p-3 mt-10 sm:text-lg xl:flex-row">
      <div
        className="object-cover w-full h-full xl:mx-0 sm:mx-auto rounded transition-transform duration-[1500ms] group-hover:scale-105 
             shadow-[0_10px_20px_rgba(255,92,92,0.6)] sm:w-4/5 xl:w-[500px] rounded-lg"
      >
        <img
          src={data.image}
          alt="image"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      <div
        className={`flex flex-col gap-y-3 w-full sm:w-4/5 xl:w-2/5 mx-auto xl:mx-0 p-4 md:p-6 rounded-lg shadow-lg text-black bg-white`}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          {data.title}
        </h2>
        <p className="text-black m-0">{data.description}</p>
        {data?.features && (
          <button
            onClick={() => setShowText((prev) => !prev)}
            className="cursor-pointer text-red-500 font-bold mb-4 text-center w-full"
          >
            {showText ? "less..." : "more..."}
          </button>
        )}

        {showText && (
          <ul
            className={`list-disc list-inside mb-4 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out
    ${showText ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
  `}
          >
            <h2 className="font-bold">{`${data?.features}`}`</h2>
            {data.textList?.map((item, index) => (
              <li key={index} className="mb-2 text-black">
                {item.text}
              </li>
            ))}
          </ul>
        )}
        <div className="flex items-center gap-x-3">
          {data.site && (
            <Link
              to={data.site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-green-500"
            >
              <button
                className="relative text-white cursor-pointer rounded-lg text-xs md:text-sm p-2 md:px-4 md:py-2 font-bold 
                border-2 border-transparent bg-gradient-to-r from-green-400 to-blue-500 
                bg-clip-padding transition-all duration-700 hover:from-blue-500 hover:to-green-400 
                hover:shadow-lg hover:shadow-blue-300/50"
              >
                View Site
              </button>
            </Link>
          )}
          {data.link && (
            <Link
              to={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-green-500 text-red-500"
            >
              <button
                className="relative text-white cursor-pointer rounded-lg text-xs md:text-sm p-2 md:px-4 md:py-2 font-bold 
                border-2 border-transparent bg-gradient-to-r from-green-400 to-blue-500 
                bg-clip-padding transition-all duration-700 hover:from-blue-500 hover:to-green-400 
                hover:shadow-lg hover:shadow-blue-300/50"
              >
                View Code
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
