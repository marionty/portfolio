
import React, { useState } from "react";
import { CgMenuRound, CgCloseO } from "react-icons/cg";
import NavLinks from "./NavLinks";
import "../Styles/Styles.css"; 

const MobileNavigation = ({ customClass}) => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <CgMenuRound
      className={`Hamburger ${customClass}`}
      size="55px"
      onClick={() => {
        console.log('Hamburger Icon Clicked');
        setOpen(!open);
      }}
    />
  );

  const closeIcon = (
    <CgCloseO
      className={`Hamburger ${customClass}`}
      size="55px"
      onClick={() => {
        console.log('Close Icon Clicked');
        setOpen(!open);
      }}
    />
  );

  const closeMobileMenu = () => {
    console.log('Closing Mobile Menu');
    setOpen(false);
  };

  return (
    <nav className={`MobileNavigation ${customClass} ${open ? '' : 'closed'} `}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};


export default MobileNavigation;
