"use client";
import React from "react";
import { useGenerationStore } from "../store/Store";
interface Props {}

const About = () => {
  const language = useGenerationStore().language;
  return (
    <div id="About">
      <h1 className="dark:text-white font-bold">
        {language === "en"
          ? "I am Manshul A frontend developer My skills include"
          : "私はフロントエンド開発者のManshulです。私のスキルには以下のものが含まれています"}
      </h1>
    </div>
  );
};

export default About;
