import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to={"/"}>Homepage</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/contact"}>Contacts</Link>
      {/* <Link to={"/project/1"}>Projet 1</Link>
      <Link to={"/project/2"}>Projet 2</Link>
      <Link to={"/project/3"}>Projet 3</Link> */}
    </nav>
  );
}

export default Navbar;
