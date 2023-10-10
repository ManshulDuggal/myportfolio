"use client";
import React from "react";
import SkillsData from "@/lib/arraydummy/skills";
import { Badge } from "../ui/badge";
import ScrollAnim from "../anim/scrollAnim";
import { useGenerationStore } from "../store/Store";
interface Props {}

const Skills = () => {
  const language = useGenerationStore().language;

  return (
    <div>
      <ScrollAnim>
        <div
          id="Skills"
          className="font-bold flex flex-col justify-center p-5 lg:p-0 gap-10 items-center scroll-mt-36 lg:scroll-m-7 "
        >
          {language === "en" ? (
            <>
              <h1 className="lg:text-xl text-lg">SKILLS</h1>

              <p className="text-center text-sm lg:text-base ">
                This website was made using NextJS 13(app router), Tailwind CSS,
                Prisma and MongoDB(Data Storage), NPM(Package Manager),
                ShadCN(Dynamic Component Library), Framer Motion(Animation),
                zod(typescript validation form), zustand(state manager)
              </p>
            </>
          ) : (
            <>
              <h1 className="lg:text-xl text-lg">スキル</h1>

              <p className="text-center text-sm lg:text-base ">
                このウェブサイトは、NextJS 13（App Router）、Tailwind
                CSS、Prisma、MongoDB（データストレージ）、NPM（パッケージマネージャー）、ShadCN（ダイナミックコンポーネントライブラリ）、Framer
                Motion（アニメーション）、zod（TypeScriptバリデーションフォーム）、zustand（ステートマネージャー）を使用して作成されました。
              </p>
            </>
          )}

          <div className="flex gap-9   whitespace-nowrap flex-wrap  justify-center">
            {SkillsData.name.map((data) => (
              <Badge
                variant={"secondary"}
                className="text-xs lg:text-base uppercase "
                key={data}
              >
                {data}
              </Badge>
            ))}
          </div>
        </div>
      </ScrollAnim>
    </div>
  );
};

export default Skills;
