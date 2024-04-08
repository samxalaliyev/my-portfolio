"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [isActive, setIsActive] = useState(path);
  const [prevPath, setprevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      const timeOut = setTimeout(() => {
        setIsActive(path);
      }, 1200);

      return () => clearTimeout(timeOut);
    }
  }, [isRouting]);

  return (
    <div
      style={{ left: "20%" }}
      className=" absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between  items-center border bg-black border-white px-4 py-7 "
    >
      {NavLinks.map((nav) => (
        <Link
          key={nav.name}
          href={nav.link}
          className=" mb-16 pl-4 min-w-[20%]"
        >
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
