import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <ul className="navlist">
        <li>
          <Link to="about" duration={500} offset={-40}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="skills" duration={500} offset={100}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" duration={500} offset={40}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="interests" duration={500} offset={100}>
            Interests
          </Link>
        </li>
        <li>
          <Link to="contact" duration={500} offset={50}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
