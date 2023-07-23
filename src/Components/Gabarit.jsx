import Header from "./Header";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Gabarit({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {/* Condition de chargement */}
      {loading ? (
        <div className="container-character">
            
          <div className="Character">
            {/* Image de l'ombre du personnage */}
            <img
              className="Character_shadow pixelart"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png"
              alt="Shadow"
            />

            {/* Image du personnage */}
            <img
              className="Character_spritesheet pixelart face-down"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacter.png"
              alt="Character"
            />
          </div>
        </div>
      ) : (
        <>
          {/* Affichage du Header */}
          <Header />
          
          {/* Affichage du contenu de la page */}
          <Outlet />
          
          {/* Affichage du Footer */}
          <Footer />
        </>
      )}
    </>
  );
}
