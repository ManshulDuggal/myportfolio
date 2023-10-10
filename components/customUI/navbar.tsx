"use client";

import { motion } from "framer-motion";
import React from "react";
import { ToggleTheme } from "@/components/themes/toggletheme";
import {
  NavigationMenu,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { windSong } from "@/utils/fonts";
import { clsx } from "clsx";

import NavLinks from "@/lib/arraydummy/NavLinks";
import { useState } from "react";
import LanguageChange from "../LanguageChange";
import { useGenerationStore } from "../store/Store";

const Navbar = () => {
  const [active, Setactive] = useState<string>("#Home");
  const language = useGenerationStore().language;

  return (
    <>
      <nav className="z-50 hidden lg:flex bg-white dark:bg-transparent bg-opacity-40 backdrop-blur-lg font-normal rounded-xl p-2 list-none   gap-10  justify-between dark:shadow-md shadow-md   dark:shadow-pink-200   items-center  ">
        <section className="flex items-center lg:space-x-10">
          <div className="">
            <h1
              className={`${windSong.className} text-3xl p-10 lg:p-0 flex justify-center items-center `}
            >
              {" "}
              Manshul
            </h1>
          </div>
        </section>
        <NavigationMenu className="flex space-x-5  ">
          {NavLinks.map((data) => (
            <NavigationMenuItem
              aria-description="This is home"
              className="select-none cursor-pointer "
              key={data.head}
              onClick={() => Setactive(data.link)}
            >
              <a
                className={clsx("p-2 w-fit relative", {
                  "text-black dark:text-white font-bold  font-bolddark:text-white  ":
                    active === data.link,
                })}
                href={data.link}
              >
                {language === "en" ? data.head : data.jp_head}

                {active === data.link ? (
                  <motion.span
                    layoutId="activeSession"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className={
                      "absolute -z-40 inset-0 w-full h-full bg-slate-200 border-2 border-black   rounded  dark:bg-pink-800 dark:border-2  dark:border-pink-300  "
                    }
                  ></motion.span>
                ) : null}
              </a>
            </NavigationMenuItem>
          ))}
        </NavigationMenu>

        <div className="">
          <ToggleTheme />
        </div>
        <div className="">
          <LanguageChange />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
