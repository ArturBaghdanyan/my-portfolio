import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LiaTelegramPlane } from "react-icons/lia";
import { BsTelephone } from "react-icons/bs";

const urls = {
  telephone: "tel:+37477171773",
  gmail: "mailto:arturbaghdanyan20@gmail.com",
  github: "https://github.com/ArturBaghdanyan",
  linkedin: "https://www.linkedin.com/in/artur-baghdanyan-60088b206",
  telegram: "https://t.me/ArturBaghdanyan",
};

const Contact = () => {
  const phoneNumber = "+37477171773";

  return (
    <div className="flex items-center justify-end my-4">
      <div className="flex items-center gap-x-3">
        <div className="relative w-5 h-5 flex justify-center items-center group">
          <Link
            to={urls.telephone}
            className="w-5 h-5 flex justify-center items-center"
          >
            <BsTelephone />
          </Link>
          <span
            className="absolute bottom-0 left-[-35px] transform -translate-x-1/2 translate-y-full 
                     bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 
                     group-hover:opacity-100 transition-all duration-300"
          >
            {phoneNumber}
          </span>
        </div>

        <Link
          to={urls.telegram}
          target="_blank"
          className="w-5 h-5 flex justify-center items-center"
        >
          <LiaTelegramPlane width={25} height={25} className="w-full h-auto" />
        </Link>
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
