import { db } from "@/lib/client";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const ProjectData = await db.projects.findMany();

    return new NextResponse(JSON.stringify(ProjectData));
  } catch (error) {
    console.log(error);
  }
};
