import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import "../Styles/Styles.css";

const NavLinks =(props) => {
  const animateFrom = {opacity: 0, y: -40}
  const animateTo = {opacity: 1, y: -0} 

    return (
        <ul className="navItems">
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
          <Link to="/Skills">Skills</Link>
        </motion.li>
        <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.25}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
       <Link to="/portfolio">Portfolio</Link>
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