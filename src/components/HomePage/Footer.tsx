const Footer = () => {
  return (
    <footer className="container-spacing w-full py-6 mt-10 bg-[#194ea3] text-gray-300 text-center border-t border-gray-700">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="font-semibold">Arthur Baghdanyan</span> — Front-End Developer
      </p>
      <div className="flex justify-center gap-4 mt-3 text-sm">
        <a
          href="mailto:your.email@example.com"
          className="hover:text-green-400 transition"
        >
          Email
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="hover:text-green-400 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          className="hover:text-green-400 transition"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
