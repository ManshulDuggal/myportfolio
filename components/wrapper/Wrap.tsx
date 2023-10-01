import React from "react";
import Navbar from "../customUI/navbar";
import Intro from "../customUI/intro";
import ProjectsCards from "../customUI/projects";
import Divide from "../customUI/divide";
import About from "../customUI/about";
import Skills from "../customUI/skills";
import Contact from "../customUI/contact";

interface Props {}

const Wrap = () => {
  return (
    <div>
      <main className=" pb-20  flex wrap flex-col items-center justify-between  ">
        <div className="z-50 pt-5 fixed">
          <Navbar />
        </div>

        <div className="!w-11/12 m-auto flex flex-col justify-center items-center space-y-28">
          <Intro />
          <Divide />
          <ProjectsCards />
          <Divide />
          <About />
          <Divide />
          <Skills />
          <Divide />
          <Contact />
        </div>
        <div className="absolute top[90rem] right-0 rounded-full  bg-green-200 opacity-70 dark:bg-pink-500 blur-[20rem] w-[31.25rem] h-[31.25rem] z-[-100]">
          {" "}
        </div>
        <div className="absolute -top[-6rem] -left-52  rounded-full  bg-purple-200 opacity-100 dark:bg-pink-500 blur-[20rem] w-[31.25rem] h-[31.25rem] z-[-100] ">
          {" "}
        </div>
      </main>
    </div>
  );
};

export default Wrap;
