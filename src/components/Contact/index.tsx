import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { BsTelephone } from "react-icons/bs";

const urls = {
  telephone: "tel:+37477171773",
  gmail:
    "https://mail.google.com/mail/?view=cm&fs=1&to=arturbaghdanyan20@gmail.com",
  github: "https://github.com/ArturBaghdanyan",
  linkedin: "https://www.linkedin.com/in/artur-baghdanyan",
  telegram: "https://t.me/ArturBaghdanyan",
};

const Contact = () => {
  const phoneNumber = "+37477171773";

  return (
    <div className="flex items-center pl-5 mt-8 lg:m-0">
      <div className="flex items-center gap-x-3">
        <div className="relative group w-5 h-5 flex justify-center items-center">
          <a
            href={urls.telephone}
            className="w-5 h-5 flex justify-center items-center"
          >
            <BsTelephone />
          </a>
          <span
            className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                         bg-gray-800 text-white text-[10px] rounded px-2 py-1 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                         pointer-events-none whitespace-nowrap z-10"
          >
            {phoneNumber}
          </span>
        </div>

        <a
          href={urls.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 h-5 flex justify-center items-center"
        >
          <LiaTelegramPlane className="w-full h-auto" />
        </a>

        <a
          href={urls.gmail}
          className="w-5 h-5 flex justify-center items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail className="w-full h-auto" />
        </a>

        <a
          href={urls.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 h-5 flex justify-center items-center"
        >
          <FaGithub className="w-full h-auto" />
        </a>

        <a
          href={urls.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 h-5 flex justify-center items-center"
        >
          <FaLinkedin className="w-full h-auto" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
