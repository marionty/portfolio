import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
  <div className="links-footer">
  
    <Link to="https://www.linkedin.com/in/tytgatmarion/" target="_blank">
      <FontAwesomeIcon icon={faLinkedin} />
    </Link>
    
    <Link to="https://github.com/marionty" target="_blank">
      <FontAwesomeIcon icon={faGithub} />
    </Link>
  </div>

  <ul className="navItems-footer">
    <li>
     
      <Link to="/">Accueil</Link>
    </li>
    <li>
     
      <Link to="/Skills">Skills & Experiences</Link>
    </li>
    <li>
      
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
