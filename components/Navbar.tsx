import Image from "next/image";
import React from "react";
import { Socials } from "../constants";

const Navbar = () => {
  return (
    <div className=" fixed top-0 z-[40] w-full h-14 md:h-[100px] bg-transparent flex justify-between items-center md:px-10 px-4">
      <div className="flex flex-row gap-3 items-center">
        <h1 className=" text-white md:text-[25px] text-lg font-bold whitespace-nowrap md:font-semibold">
          Shamkhal Aliyev
        </h1>
      </div>

      <div className="flex flex-row md:gap-5 gap-3 mb-2">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
