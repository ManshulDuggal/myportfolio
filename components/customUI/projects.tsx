// "use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { getProjects } from "@/lib/projectsfunc";
import VideoBg from "./videoBg";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import Divide from "./divide";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import ScrollAnim from "@/components/anim/scrollAnim";
import FadeAnim from "@/components/anim/fade";
import { Button } from "@/components/ui/button";

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

const ProjectsCards = async () => {
  const dataProjects = await getProjects();

  return (
    <>
      <ScrollAnim>
        <div
          id="Projects"
          className="lg:scroll-mt-96 sm:text-sm lg:text-base  "
        >
          <div className=" w-screen h-auto  lg:flex lg:flex-col block justify-center text-center p-4  gap-10 overflow-hidden">
            <h1 className="dark:text-white　text-black ">Projects</h1>
            <ScrollArea className="rounded-md border p-4">
              <ScrollBar orientation="vertical" />
              <section className="lg:grid lg:grid-cols-3 grid grid-cols-1  lg:gap-10 space-y-28  overflow-x-scroll   justify-center items-center p-4 relative  ">
                <div className="lg:absolute hidden  pointer-events-none lg:overflow-clip lg:aspect-video lg:bg-inherit ">
                  <VideoBg />
                </div>
                {dataProjects.map((ProjectData: projectData) => (
                  <div
                    key={ProjectData.id}
                    className="cursor-pointer hover:scale-110 duration-100 "
                  >
                    <Card id={ProjectData.id} className="">
                      <CardHeader className="text-md">
                        {ProjectData.Name}
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
                                {ProjectData.SubHeading}
                              </CardDescription>
                            </FadeAnim>
                          </TabsContent>

                          <TabsContent
                            value="2"
                            className="aspect-[4/3] w-full h-full"
                          >
                            <FadeAnim>
                              <p className="p-10">{ProjectData.Description}</p>
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
                            Click here to view the project
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </section>
            </ScrollArea>
          </div>
        </div>
      </ScrollAnim>
    </>
  );
};

export default ProjectsCards;
