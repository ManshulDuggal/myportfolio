import React from "react";

import { getProjects } from "@/lib/projectsfunc";

import Divide from "./divide";

import ScrollAnim from "@/components/anim/scrollAnim";

import State from "./State";
import ProjectsCards from "./ProjectsCards";

const Projects = async () => {
  const dataProjects = await getProjects();

  return (
    <>
      <div id="Projects" className=" sm:text-sm lg:text-base  ">
        {/* <ScrollAnim> */}
        <ProjectsCards dataProjects={dataProjects} />
        {/* </ScrollAnim> */}
      </div>
    </>
  );
};

export default Projects;
