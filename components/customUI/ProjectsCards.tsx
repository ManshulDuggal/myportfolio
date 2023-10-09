"use client";

import React, { use } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoBg from "./videoBg";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import FadeAnim from "@/components/anim/fade";
import { Button } from "@/components/ui/button";
import { useGenerationStore } from "../store/Store";
import Divide from "./divide";

interface projectData {
  id: string;
  Description: string;
  JP_Name: string;
  Made_using: string[];
  Name: string;
  JP_Description: string;
  ProjectLink: string;
  SubHeading?: string;
  ImageLink: string;
}
[];

const ProjectsCards = ({ dataProjects }: { dataProjects: projectData[] }) => {
  const { language } = useGenerationStore();

  return (
    <div>
      <div className=" w-screen h-auto  lg:flex lg:flex-col block justify-center text-center p-4  gap-10 ">
        <h1 className="dark:text-white　text-black lg:text-xl ">
          {language === "en" ? "Projects" : "プロジェクト"}
        </h1>

        <section className="lg:grid lg:grid-cols-3 block  lg:gap-10 space-y-20   justify-center items-center p-4 relative max-w-7xl m-auto ">
          <div className="lg:absolute hidden lg:block  pointer-events-none lg:overflow-clip lg:aspect-video lg:bg-inherit ">
            <VideoBg />
          </div>

          {dataProjects.map((ProjectData: projectData) => (
            <div
              key={ProjectData.id}
              className="cursor-pointer hover:scale-110 duration-100 "
            >
              <Card id={ProjectData.id} className="">
                <CardHeader className="text-md">
                  {language === "en" ? ProjectData.Name : ProjectData.JP_Name}
                </CardHeader>

                <CardContent className="flex flex-col space-y-4 justify-center items-center text-center">
                  <div className="flex space-x-2 justify-center ">
                    {ProjectData.Made_using.map((data) => (
                      <Badge key={data}>{data}</Badge>
                    ))}
                  </div>

                  <Divide />
                  <Tabs defaultValue="1">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="1">1</TabsTrigger>
                      <TabsTrigger value="2">2</TabsTrigger>
                    </TabsList>

                    <TabsContent value="1">
                      <FadeAnim>
                        <div className="">
                          <Image
                            quality="100"
                            className="w-full object-cover rounded-2xl p-2 aspect-[4/3]"
                            alt="an image"
                            src={ProjectData.ImageLink}
                            height={1200}
                            width={800}
                            loading="lazy"
                          />
                        </div>
                        <CardDescription>
                          {language === "en"
                            ? ProjectData.SubHeading
                            : ProjectData.SubHeading}
                        </CardDescription>
                      </FadeAnim>
                    </TabsContent>

                    <TabsContent
                      value="2"
                      className="aspect-[4/3] w-full h-full"
                    >
                      <FadeAnim>
                        <p className="p-10">
                          {" "}
                          {language === "en"
                            ? ProjectData.Description
                            : ProjectData.JP_Description}
                        </p>
                      </FadeAnim>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={"link"}
                    className="animate-pulse hover:text-red-400 flex text-center items-center justify-center w-full"
                  >
                    <a target="_blank" href={ProjectData.ProjectLink}>
                      {" "}
                      {language === "en"
                        ? "Click here to view the project"
                        : "プロジェクトを見るにはこちらをクリックしてください"}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProjectsCards;
