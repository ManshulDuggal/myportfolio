"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useGenerationStore } from "../store/Store";

const Intro = () => {
  const { language } = useGenerationStore();

  return (
    <>
      <div className="dark:bg-gradient-to-t bg-gradient-to-t  dark:to-stone-900   dark:from-black/5 from-white  via-slate-100  to-white  lg:p-24 p-4 w-full  ">
        {language === "en" ? (
          <section className="flex   flex-col items-center justify-center text-center space-y-5 lg:h-screen h-screen lg:font-light     ">
            <div className="max-w-xl  ">
              <h1 className="">
                As a software engineer, I excel at quickly learning and
                implementing new technologies and concepts. I have a proven
                track record of reducing team stress, introducing innovative
                ideas, and improving existing projects. My collaborative
                approach helps create a more efficient and harmonious work
                environment while delivering high-quality results
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
        ) : (
          <section className="flex flex-col items-center justify-center text-center space-y-5 lg:h-screen h-screen lg:font-light ">
            <div className="max-w-xl ">
              <h1>
                ソフトウェアエンジニアとして、新しい技術やコンセプトを迅速に学習し、実装する能力に優れています。私はチームのストレスを軽減し、革新的なアイデアを導入し、既存のプロジェクトを改善することで、実績を重ねてきました。また、協力的なアプローチを取ることで、効率的で調和の取れた職場環境を促進し、高品質な結果を提供するのに貢献しています。
              </h1>
            </div>
            <div className="flex space-x-20 items-center justify-center ">
              <Button className="h-auto w-auto text-xs lg:text-base">
                <a href="ResumeEN.pdf" download>
                  履歴書をダウンロード
                </a>
                <ArrowDownIcon
                  href="/Docs/ResumeEN"
                  className=" animate animate-pulse lg:w-5 h-auto text-xs lg:text-base w-max "
                />{" "}
              </Button>
              <Button>
                <Link href={"#Contact"}> お問い合わせください</Link>
              </Button>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Intro;
