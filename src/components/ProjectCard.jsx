import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";

import projects from "../datas/projects";
function ProjectCard() {
  return (
    <section className="projectcard-component">
      {projects.map((project) => (
        <Link
          className="projectcard-link"
          key={project.id}
          to={`/projects/${project.name}`}
          state={{ project: project }}
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
