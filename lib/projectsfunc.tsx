export async function getProjects() {
  const res = await fetch(process.env.BASE_URL + "/api/projects");
  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
}
