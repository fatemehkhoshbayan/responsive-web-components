import { projectsData } from "../assets/projectsData.js";

function renderProjects(container) {
  const projectCards = projectsData.map((project) => {
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

  container.innerHTML = projectCards.join("");
}

const projectSection = document.querySelector("section#projects .projects");

renderProjects(projectSection);
