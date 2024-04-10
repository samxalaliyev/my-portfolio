import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              About Me
            </span>
          </h1>
          <p className="text-gray-200 hidden md:text-xl md:font-bold md:block">
            I am a passionate frontend developer with a strong foundation in web
            development technologies. With a keen eye for detail and a focus on
            creating highly functional and visually appealing websites, I strive
            to deliver exceptional user experiences. I am adept at translating
            design mockups into responsive and interactive web pages, ensuring
            cross-browser compatibility and optimal performance.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className=" rounded-[20px] group relative bg-transparent   px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <span className="relative z-10 font-semibold">My Skills</span>
              <div className="absolute z-[1] rounded-lg bg-gradient-to-r from-purple-950 to-red-700 duration-300 ease-in-out inset-0  w-0 group-hover:w-full" />
            </Link>

            <Link
              href="/my-projects"
              className=" rounded-lg group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute z-[1] rounded-lg bg-gradient-to-r from-purple-950 to-red-700 duration-300 ease-in-out inset-0  w-0 group-hover:w-full" />
              <span className="relative z-10 font-semibold">My projects</span>
            </Link>

            <Link
              href="/contact-me"
              className=" rounded-lg group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute z-[1] rounded-lg bg-gradient-to-r from-purple-950 to-red-700 duration-300 ease-in-out inset-0  w-0 group-hover:w-full" />
              <span className="relative z-10 font-semibold">Contact me</span>
            </Link>
          </div>
        </div>
      </div>

      {
        //?Mobile form
      }

      <div className=" absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className=" rounded-[20px] group bg-gradient-to-r from-purple-950 to-red-950 px-5  py-3 text-lg text-white max-w-[200px]"
        >
          My Skills
        </Link>

        <Link
          href="/my-projects"
          className=" rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My Projects
        </Link>
        <Link
          href="/contact-me"
          className=" rounded-[20px] group  bg-transparent border border-white  px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>

      <div className=" absolute bottom-0 right-0 z-[8]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>
      <div className="absolute bottom-0 z-[5] w-full h-full">
        <Image
          src="/trees.webp"
          alt="tree"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className=" absolute top-10 left-0  z-[10]"
      />
    </main>
  );
}
