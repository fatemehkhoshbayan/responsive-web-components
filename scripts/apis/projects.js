export async function getProjectsData() {
  try {
    const res = await fetch(
      "https://fatemehkhoshbayan.github.io/responsive-web-components/assets/projectsData.json",
    );

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
