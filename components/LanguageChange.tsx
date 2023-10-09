"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { useGenerationStore } from "./store/Store";
import { buttonVariants } from "./ui/button";

const LanguageChange = () => {
  const { toast } = useToast();
  const { setLanguage } = useGenerationStore();
  function handleOnClick(lang: any) {
    if (lang === "ja") {
      // console.log("button clicked" + );
      setLanguage(lang),
        toast({
          title: "Language changed",
          description: "言語が日本語に更新しました！",
        });
    } else {
      setLanguage(lang),
        toast({
          title: "Language changed",
          description: "primary language have been set to english",
        });
    }
  }

  return (
    <>
      <div>
        <h5
          className={cn(buttonVariants({ variant: "link" }), "cursor-pointer")}
          onClick={() => handleOnClick("ja")}
        >
          日本語
        </h5>

        <h5
          className={cn(buttonVariants({ variant: "link" }), "cursor-pointer")}
          onClick={() => handleOnClick("en")}
        >
          {" "}
          Enlgish
        </h5>
      </div>
    </>
  );
};

export default LanguageChange;
