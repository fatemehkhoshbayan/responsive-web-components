import { projectsData } from "../assets/projectsData.js";

/* Elements */
const projectSection = document.querySelector("section#projects .projects");
const searchInput = document.querySelector(".search-field .search-input");

function renderProjects(container, projects, searchQuery = "") {
  if (projects && projects.length > 0) {
    const projectCards = projects.map((project) => {
      return `
            <article class="project-article">
              <figure class="project-image">
                <img src="${project.imageSrc}" alt="${project.imageAlt}" />
                <figcaption class="category-badge">${project.tags}</figcaption>
              </figure>
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <button aria-label="View ${project.title} details">View Project</button>
            </article>
          `;
    });

    container.classList.remove("empty-state");
    container.innerHTML = projectCards.join("");
  } else {
    const emptyState = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="empty-box">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
            </svg>
            <p>No results for "<strong>${searchQuery}</strong>"!</p>
          `;

    container.classList.add("empty-state");
    container.innerHTML = emptyState;
  }
}

searchInput.addEventListener("input", (e) => {
  const searchQuery = e.target.value.toLowerCase();
  let filteredProjects = projectsData;

  if (searchQuery) {
    filteredProjects = projectsData.filter((project) => {
      const title = project.title.toLowerCase();
      return title.includes(searchQuery);
    });
  } else {
    filteredProjects = projectsData;
  }

  renderProjects(projectSection, filteredProjects, searchQuery);
});

renderProjects(projectSection, projectsData);
