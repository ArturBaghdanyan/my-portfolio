import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const urls = {
  gmail: "mailto:arturbaghdanyan20@gmail.com",
  github: "https://github.com/ArturBaghdanyan",
  linkedin: "https://www.linkedin.com/in/artur-baghdanyan-60088b206",
};

const Contact = () => {
  return (
    <div className="flex items-center justify-end my-4">
      <div className="flex items-center gap-x-3">
        <Link
          to={urls.gmail}
          target="_blank"
          className="w-5 h-5 flex justify-center items-center"
        >
          <SiGmail width={25} height={25} className="w-full h-auto" />
        </Link>
        <Link
          to={urls.github}
          target="_blank"
          className="w-5 h-5 flex justify-center items-center"
        >
          <FaGithub width={25} height={25} className="w-full h-auto" />
        </Link>
        <Link
          to={urls.linkedin}
          target="_blank"
          className="w-5 h-5 flex justify-center items-center"
        >
          <FaLinkedin width={20} height={20} className="w-full h-auto" />
        </Link>
      </div>
    </div>
  );
};
export default Contact;
