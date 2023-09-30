import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "@radix-ui/react-icons";

const Intro = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center space-y-5 h-screen font-light">
        <div className="max-w-xl">
          <h1>
            As a software engineer, I excel at quickly learning and implementing
            new technologies and concepts. I have a proven track record of
            reducing team stress, introducing innovative ideas, and improving
            existing projects. My collaborative approach helps create a more
            efficient and harmonious work environment while delivering
            high-quality results
          </h1>
        </div>
        <div className="flex space-x-20 items-center justify-center">
          <Button className="h-auto w-auto">
            <a href="ResumeEN.pdf" download>
              Download CV
            </a>
            <ArrowDownIcon
              href="/Docs/ResumeEN"
              className=" animate animate-pulse w-5 "
            />{" "}
          </Button>
          <Button>Contact me here</Button>
        </div>
      </section>
    </>
  );
};

export default Intro;
