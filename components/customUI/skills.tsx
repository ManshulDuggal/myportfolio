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
          className="font-bold flex flex-col justify-center gap-10 items-center "
        >
          <h1 className="text-xl">SKILLS</h1>

          <p className="text-center">
            This website was made using NextJS 13(app router), Tailwind CSS,
            Prisma and MongoDB(Data Storage), NPM(Package Manager),
            ShadCN(Dynamic Component Library), Framer Motion(Animation)
          </p>
          <div className="flex gap-9  whitespace-nowrap flex-wrap  justify-center">
            {SkillsData.name.map((data) => (
              <Badge variant={"secondary"} className="text-sm " key={data}>
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
