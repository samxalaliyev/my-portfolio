"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { SkillData } from "@/constants";
import { delay } from "framer-motion";

const page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen flex justify-center items-center bg-cover bg-center"
    >
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className=" font-semibold text-white text-4xl md:text-[50px]">
            Skills{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              and{" "}
            </span>{" "}
            Technologies
          </h1>
        </div>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={2000}
          modules={[Autoplay]}
          className="max-w-[80%] cursor-pointer"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index} className="mx-1 md:mx-0">
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={2000}
          modules={[Autoplay]}
          className="max-w-[80%] cursor-pointer"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index} className="mx-1 md:mx-0">
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default page;
