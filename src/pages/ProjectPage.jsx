import { useLocation, Link } from "react-router-dom";
import "../styles/ProjectPage.css";

function ProjectPage() {
  const location = useLocation();
  const { project, link } = location.state;
  return (
    <section className="ProjectPageComponent">
      <h1>{project.name} </h1>
      <article className="ProjectPage-article">
        <figure className="project-img">
          {" "}
          <img src={project.image} alt="" />{" "}
        </figure>
        <figcaption className="ProjectPage-text">
          <p>{project.desc} </p>
          <Link to={link} target="_blank">
            {" "}
            Déploiment
          </Link>
          <Link to={project.github} target="_blank">
            {" "}
            Github
          </Link>
        </figcaption>
      </article>
    </section>
  );
}

export default ProjectPage;
