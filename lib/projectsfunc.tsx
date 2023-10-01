import { db } from "./client";

export async function getProjects() {
  const res: any = await db.projects.findMany();

  return JSON.parse(res);
}
