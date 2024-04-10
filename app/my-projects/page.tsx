import ProjectCards from "@/components/ProjectCards";
import { Projects } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
    >
      <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
        {Projects.map((project, index) => (
          <ProjectCards
            key={index}
            title={project.title}
            image={project.src}
            text={project.text}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
