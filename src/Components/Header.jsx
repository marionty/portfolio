import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'
import "../Styles/Styles.css";

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
      
          <Navigation />
          <MobileNavigation />
       

        {/* Liens de réseaux sociaux */}
        <div className="links">
          <Link to="https://www.linkedin.com/in/tytgatmarion/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link to="https://github.com/marionty" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
