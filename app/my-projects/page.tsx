import ProjectCards from "@/components/ProjectCards";

import React from "react";

const page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className=" bg-center bg-cover"
    >
      <ProjectCards />
    </div>
  );
};

export default page;
