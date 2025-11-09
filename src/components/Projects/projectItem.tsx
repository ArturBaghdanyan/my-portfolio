import { Link } from "react-router-dom";
import type { IProject } from "../../types/project-type";

interface ProjectProps {
  data: IProject;
}

export const ProjectItem: React.FC<ProjectProps> = ({ data }) => {
  return (
    <div className="w-full h-auto flex flex-col justify-between gap-y-4 p-3 mt-10 sm:text-lg xl:flex-row border border-white rounded-lg 
           bg-[linear-gradient(to_top_right,#304bff,#00ff9f)]">
      {/* Card Container */}

      <div>
        <img
          src={data.image}
          alt="image"
          className="object-cover w-[400px] h-[300px] mx-auto rounded transition-transform duration-[1500ms] group-hover:scale-105 
             shadow-[0_10px_20px_rgba(255,92,92,0.6)] sm:w-[500px]"
        />
      </div>

      <div
        className={`w-4/5 xl:w-2/5 mx-auto xl:mx-0 p-6 rounded-lg shadow-lg text-black bg-[#00a4a4]`}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          {data.title}
        </h2>
        <p className="text-black mb-4">{data.description}</p>

        {data.site && (
          <p className="mt-4">
            <Link
              to={data.site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-green-500"
            >
              <b className="text-white">View Site</b>
            </Link>
          </p>
        )}
        {data.link && (
          <Link
            to={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-green-500 text-red-500"
          >
            <b className="text-white">View Link</b> <br />
          </Link>
        )}
      </div>
    </div>
  );
};
