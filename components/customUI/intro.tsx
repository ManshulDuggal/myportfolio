import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Intro = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center space-y-5 lg:h-screen h-screen lg:font-light ">
        <div className="max-w-xl ">
          <h1>
            As a software engineer, I excel at quickly learning and implementing
            new technologies and concepts. I have a proven track record of
            reducing team stress, introducing innovative ideas, and improving
            existing projects. My collaborative approach helps create a more
            efficient and harmonious work environment while delivering
            high-quality results
          </h1>
        </div>
        <div className="flex space-x-20 items-center justify-center ">
          <Button className="h-auto w-auto text-xs lg:text-base">
            <a href="ResumeEN.pdf" download>
              Download CV
            </a>
            <ArrowDownIcon
              href="/Docs/ResumeEN"
              className=" animate animate-pulse lg:w-5 h-auto text-xs lg:text-base w-max "
            />{" "}
          </Button>
          <Button>
            <Link href={"#Contact"}> Contact me here</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Intro;
