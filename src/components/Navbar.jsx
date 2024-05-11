import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to={"/"}>Homepage</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/contact"}>Contacts</Link>
    </nav>
  );
}

export default Navbar;
