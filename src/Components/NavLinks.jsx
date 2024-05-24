import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import "../Styles/Styles.css";
import { useState } from 'react';

const NavLinks = (props) => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  const handlePortfolioClick = (e) => {
    e.preventDefault();
    setSubMenuOpen(!isSubMenuOpen);
  };
    return (
<ul className={`navItems ${props.isFooter ? 'footer-nav' : ''}`}>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.05}}
          onClick={() => props.isMobile && props.closeMobileMenu()}>
          <Link  to="/">Accueil</Link>
        </motion.li>
        <motion.li
         initial={animateFrom}
         animate={animateTo}
         transition={{delay: 0.15}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
          <Link to="/Skills">Skills & Experiences</Link>
        </motion.li>
        <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.25}}
        onClick={handlePortfolioClick}>
        <a href="#">Portfolio</a>
        {isSubMenuOpen && (
          <ul className="sub-menu">
            <li>
              <Link to="/Portfolio/ui-ux-designer">UI/UX Designer</Link>
            </li>
            <li>
              <Link to="/Portfolio/web-development">Web Development</Link>
            </li>
            <li>
              <Link to="/Portfolio/mobile-development">Mobile Development</Link>
            </li>
          </ul>
        )}
        </motion.li>
        <motion.li
         initial={animateFrom}
         animate={animateTo}
         transition={{delay: 0.35}}
onClick={() => props.isMobile && props.closeMobileMenu()}>
          <Link  to="/contact">Contact</Link>
        </motion.li>
      </ul>
    );
}
export default NavLinks;