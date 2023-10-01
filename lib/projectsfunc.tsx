import { db } from "./client";

interface dataSchema {
  id: string;
  Description: string;
  ImageLink: string;
  JP_Description: string;
  JP_Name: string;
  Made_using: string[];
  Name: string;
  ProjectLink: string;
}

export async function getProjects(): Promise<dataSchema[]> {
  const data: dataSchema[] = await db.projects.findMany();
  return data;
}
