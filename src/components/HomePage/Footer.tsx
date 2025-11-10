import Contact from "../Contact";

const Footer = () => {
  return (
    <footer className="container-spacing w-full flex flex-col gap-y-4 mt-10 bg-[#194ea3] text-gray-300 text-center border-t border-gray-700">
      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">Arthur Baghdanyan</span> — Front-End
        Developer
      </p>
      <div className="flex justify-center gap-x-4 text-sm">
        <Contact />
      </div>
    </footer>
  );
};

export default Footer;
