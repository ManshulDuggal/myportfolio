"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence, animate } from "framer-motion";

import { Cross1Icon, DragHandleHorizontalIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { NavigationMenuItem } from "../ui/navigation-menu";
import NavLinks from "@/lib/arraydummy/NavLinks";
import { clsx } from "clsx";

import { cn } from "@/lib/utils";
import LanguageChange from "../LanguageChange";
import { useGenerationStore } from "../store/Store";

interface Props {}

const Mobres = () => {
  const [open, Setopen] = useState<boolean>();
  const [active, Setactive] = useState<string>("#Home");

  const { theme, setTheme } = useTheme();

  const language = useGenerationStore().language;

  function toggle(data: string) {
    Setopen(!open);
    Setactive(data);
  }
  return (
    <AnimatePresence initial={false}>
      <div className="lg:hidden">
        <nav className="fixed top-0 left-0 z-[10] w-full ">
          {open ? (
            <>
              <motion.div
                key={"data"}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className={
                  (cn(
                    "w-[300px] h-screen flex flex-col items-center m-auto fixed p-4 "
                  ),
                  theme === "light"
                    ? "bg-white text-black w-[300px] h-screen flex flex-col items-center m-auto fixed p-4 "
                    : "bg-black text-white w-[300px] h-screen flex flex-col items-center m-auto fixed p-4 ")
                }
              >
                <Cross1Icon
                  onClick={() => Setopen(!open)}
                  className="w-6 h-6"
                />

                <LanguageChange />

                {NavLinks.map((data) => (
                  <NavigationMenuItem
                    aria-description="This is home"
                    className="  select-none cursor-pointer list-none gap-32   "
                    key={data.head}
                    onClick={() => toggle(data.link)}
                  >
                    <a
                      className={clsx(
                        "p-2 w-fit flex flex-col list-none relative",
                        {
                          "text-black dark:text-white font-bold  font-bolddark:text-white  ":
                            active === data.link,
                        }
                      )}
                      href={data.link}
                    >
                      {language === "en" ? data.head : data.jp_head}

                      {active === data.link ? (
                        <motion.span
                          layoutId="activeSession"
                          transition={{
                            type: "inertia",
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
              </motion.div>
            </>
          ) : (
            <DragHandleHorizontalIcon
              onClick={() => Setopen(!open)}
              className="w-6 h-6"
            />
          )}
        </nav>
      </div>
    </AnimatePresence>
  );
};

export default Mobres;
