import Link from "next/link";

const ProjectCards = () => {
  return (
    <div className="w-screen flex justify-center items-center">
      <div className=" md:px-10 flex justify-center items-center">
        <div className=" h-screen md:grid md:grid-cols-2 md:gap-5 flex flex-wrap overflow-y-auto md:overflow-hidden pt-20 pb-40">
          <div className="group relative mx-10 md:w-96 m-3 rounded-md cursor-pointer flex justify-center">
            <img src="/KapitalBank.png" className="rounded-md" />
            <span className="absolute transition-all delay-100 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-70 bg-black z-50">
              <Link
                href="https://kapitalbank-clone.vercel.app/"
                className=" text-white font-bold"
              >
                Click and Learn more
              </Link>
            </span>
          </div>
          <div className="group relative mx-10 md:w-96 m-3 rounded-md cursor-pointer flex justify-center">
            <img src="/papajhons.png" className="rounded-md" />
            <span className="absolute transition-all delay-100 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-70 bg-black z-50">
              <Link
                href="https://papajohns-clone.vercel.app/"
                className=" text-white font-bold"
              >
                Click and Learn more
              </Link>
            </span>
          </div>
          <div className="group relative mx-10 md:w-96 m-3 rounded-md cursor-pointer flex justify-center">
            <img src="/portfolio.png" className="rounded-md" />
            <span className="absolute transition-all delay-100 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-70 bg-black z-50">
              <Link
                href="https://shamxalaliyev.vercel.app/"
                className=" text-white font-bold"
              >
                Click and Learn more
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
