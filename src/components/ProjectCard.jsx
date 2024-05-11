import { useRouteLoaderData, Link } from "react-router-dom";
import "../styles/ProjectCard.css";

function ProjectCard() {
  const projects = useRouteLoaderData("project");

  return (
    <section className="projectcard-component">
      {projects.map((project) => (
        <Link
          className="projectcard-link"
          key={project.id}
          to={`/projects/${project.id}`}
        >
          <article>
            <figure>
              <img
                className="project-image"
                src={project.image}
                alt="project"
              />
            </figure>
            <figcaption className="projectcard-caption">
              <h2>{project.name}</h2>
              <p>{project.desc}</p>
            </figcaption>
          </article>
        </Link>
      ))}
    </section>
  );
}

export default ProjectCard;
