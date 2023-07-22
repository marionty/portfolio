import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
  <div className="links-footer">
    {/* Lien vers le profil LinkedIn */}
    <Link to="https://www.linkedin.com/in/tytgatmarion/" target="_blank">
      <FontAwesomeIcon icon={faLinkedin} />
    </Link>
    {/* Lien vers le profil GitHub */}
    <Link to="https://github.com/marionty" target="_blank">
      <FontAwesomeIcon icon={faGithub} />
    </Link>
  </div>

  <ul className="navItems-footer">
    <li>
      {/* Lien vers la page d'accueil */}
      <Link to="/">Accueil</Link>
    </li>
    <li>
      {/* Lien vers la page des compétences */}
      <Link to="/Skills">Skills</Link>
    </li>
    <li>
      {/* Lien vers la page du portfolio */}
      <Link to="/portfolio">Portfolio</Link>
    </li>
    <li>
      {/* Lien vers la page de contact */}
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
    {/* Lien vers la page d'accueil */}
    <Link to="/" className="logo-footer">
    <img
      src="../../../images/logo2.png"
      alt="m dans un cercle accompagné d'un t"
    />
  </Link>
</footer>

  );
}

export default Footer;
