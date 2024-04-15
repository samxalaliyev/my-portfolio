"use client";
import Transition from "@/components/Transition";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading && <Transition />}

      <main className="w-screen h-screen relative">
        <div
          className="flex items-center w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url(/main-bg.webp)" }}
        >
          <div className="pl-10 md:pl-40 pb-96 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
            <h1 className="text-[50px] text-white font-semibold">
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                About Me
              </span>
            </h1>
            <p className="text-gray-200 -ml-5 max-w-96 md:max-w-full md:ml-0 -mb-32 md:mb-0 text-sm md:text-xl md:font-bold md:block">
              &quot;Hello! I&apos;m Shamkhal Aliyev, a frontend developer. I
              specialize in building web applications using technologies like
              React and Next.js. My focus is on enhancing user experience, and I
              typically use libraries such as Material UI and Tailwind
              CSS.&quot;
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

        <div className=" absolute flex bottom-24 z-[20] right-5 flex-col md:hidden gap-5">
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

        <div className=" absolute bottom-0 right-0 z-[8] hidden md:block">
          <Image
            src="/horse.png"
            alt="horse"
            height={300}
            width={300}
            className="absolute md:right-56 md:top-40 top-28 right-30 w-52 md:w-72"
          />

          <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
        </div>
        <div className="absolute bottom-0 z-[5] w-full h-full">
          <Image
            src="/trees.webp"
            alt="tree"
            width={2000}
            height={2000}
            className="md:w-full h-full object-cover "
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
    </div>
  );
}
