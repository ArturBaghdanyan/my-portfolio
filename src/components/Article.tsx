import quote from "../assets/quote.svg";

const Article = () => {
  return (
    <div className="w-4/5 sm:w-3/5 h-[120px] border-2 rounded-xl text-white mx-auto relative bg-gradient-to-tl from-[#005959] to-transparent mt-15 md:h-[80px]">
      <div className="absolute bottom-25 left-6 md:bottom-16 md:left-6 rotate-180">
        <img src={quote} alt="quote" width="30px" height="30px" />
      </div>
      <div
        className="flex justify-center items-center h-full text-center text-sm sm:text-xl font-mono
      "
      >
        Everything will be fine, if it's not fine, then it's not the end.
      </div>
      <div className=" absolute right-6 top-25 md:top-15">
        <img src={quote} alt="quote" width="30px" height="30px" />
      </div>
    </div>
  );
};

export default Article;
