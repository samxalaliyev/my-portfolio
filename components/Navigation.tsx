"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setprevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setprevPath(path);
      const timeOut = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

      return () => clearTimeout(timeOut);
    }
  }, [isRouting]);

  return (
    <div
      // style={{ left: "20%" }}
      className=" absolute z-[50] left-10 -bottom-20  md:w-32 w-52 md:-left-10 md:bottom-48 rounded-full md:rounded-3xl flex md:flex-col justify-between  items-center border bg-black border-white  px-4  py-7 "
    >
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className=" md:m-3 mb-16 pl-4">
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path == nav.name ? "text-purple-800" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
