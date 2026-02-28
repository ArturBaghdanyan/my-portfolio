import Contact from "../Contact";

const Footer = () => {
  return (
    <footer className="relative w-full mt-20 pt-12 pb-10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-md border-t border-white/5" />
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 container-spacing flex flex-col items-center gap-y-6">
        
        <div className="relative group">
          <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex justify-center gap-x-6 text-sm">
            <Contact />
          </div>
        </div>

        <div className="flex flex-col gap-y-1 text-center">
          <p className="text-gray-400 text-sm tracking-wide">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Arthur Baghdanyan
            </span>
          </p>

          <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400/80 font-bold">
            Front-End / Full-Stack Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;