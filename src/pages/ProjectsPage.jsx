import ProjectList from "../components/ProjectList";
import { Outlet } from "react-router-dom";

function ProjectsPage() {
  return (
    <section className="ProjectsPageComponent">
      <ProjectList />
      <Outlet />
    </section>
  );
}

export default ProjectsPage;
