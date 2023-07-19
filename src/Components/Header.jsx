import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <header>
      {/* Barre de navigation */}
      <nav>
        {/* Logo */}
        <Link to="/" className="logo">
          <img
            src="../../../images/logo1.png"
            alt="m dans un cercle accompagné d'un t"
          />
        </Link>
        
        {/* Liens de navigation */}
        <ul className="navItems">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/Skills">Skills</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Liens de réseaux sociaux */}
        <div className="links">
          <Link to="https://www.linkedin.com/in/tytgatmarion/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link to="https://github.com/marionty" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
