import React from "react";
import SkillsData from "@/lib/arraydummy/skills";
import { Badge } from "../ui/badge";
import ScrollAnim from "../anim/scrollAnim";
interface Props {}

const Skills = () => {
  return (
    <div>
      <ScrollAnim>
        <div
          id="Skills"
          className="font-bold flex flex-col justify-center p-5 lg:p-0 gap-10 items-center "
        >
          <h1 className="lg:text-xl text-lg">SKILLS</h1>

          <p className="text-center text-sm lg:text-base ">
            This website was made using NextJS 13(app router), Tailwind CSS,
            Prisma and MongoDB(Data Storage), NPM(Package Manager),
            ShadCN(Dynamic Component Library), Framer Motion(Animation)
          </p>
          <div className="flex gap-9   whitespace-nowrap flex-wrap  justify-center">
            {SkillsData.name.map((data) => (
              <Badge
                variant={"secondary"}
                className="text-xs lg:text-base "
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
