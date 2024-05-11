import { useLocation, Link } from "react-router-dom";

function ProjectPage() {
  const location = useLocation();
  const { project } = location.state;
  return (
    <section className="ProjectPageComponent">
      <h1>{project.name} </h1>
      <figure>
        {" "}
        <img src={project.image} alt="" />{" "}
      </figure>
      <figcaption>
        <p>{project.desc} </p>
        <Link> ICI LINK Deploy</Link>
        <Link> ICI LINK REPO</Link>
      </figcaption>
    </section>
  );
}

export default ProjectPage;
