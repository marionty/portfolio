import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Rocket from "../Components/rocket";
import ScrollIndicator from "../Components/ScrollIndicator";
import Typed from 'typed.js';

export default function Home() {
  const [showFullText, setShowFullText] = useState(false);
  const [loading, setLoading] = useState(false);
  const el = useRef(null);
 
  useEffect(() => {
    setLoading(true);

    // Initialisation de Typed.js pour l'animation du texte
    const typed = new Typed(el.current, {
      strings: ['web developer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
    });

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      // Nettoyage de Typed.js lorsqu'il n'est plus utilisé
      typed.destroy();
    };
  }, []);
  
  const handleButtonClick = () => {
    setShowFullText(!showFullText);
  };

  return (
    <article>
      <section className="profil">
        <div className="wrapper">
          <ScrollIndicator />
          <div className="cols cols0">
            <span className="topline">Hello </span>
            <p>my name is Marion Tytgat</p>
            <h1>
              I'm <span ref={el} className="multiText">web developer</span>
            </h1>
            <div className="button-profil">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bt-profil"
              >
                Download CV
              </a>
              <Link to="/contact" className="bt-profil">
                Hire me
              </Link>
            </div>
          </div>
          <div className="cols cols1">
            
              <img src="images/avatartete.png" alt="avatar de profil" />
            </div>
          </div>
        
      </section>

      <section className="about-section">
        
          <div className="about-hero">
            <h3>About me</h3>
          </div>

          <div className="infoabout">
           
              <Rocket />
           
            
              <div className="infoabout__content">
                {showFullText ? (
                  <>
                    <span className="infoabout__short-text">
                      <div className="infoabout__soustitle">
                        Bonjour et bienvenue dans mon univers !
                      </div>
                      <br />
                      Je suis un véritable caméléon professionnel, ayant passé
                      environ 10 ans dans le monde chatoyant du prêt-à-porter et
                      même quelques escapades dans le secteur médical. Mais un
                      jour, j'ai décidé de prendre une tangente audacieuse vers
                      le <strong>développement web et mobile.</strong>
                      <br />
                      <br />
                    </span>
                    <span className="infoabout__full-text">
                      Depuis février 2023, je suis en formation de{" "}
                      <strong>développeur web et mobile.</strong> Je suis encore
                      aux premiers pas de mon parcours, découvrant avec
                      émerveillement les langages du front-end et du back-end.
                      C'est comme explorer une jungle mystérieuse remplie de{" "}
                      <strong>JavaScript, PHP</strong> et autres créatures de
                      code étranges. Mais je suis prête à relever tous les défis
                      !
                      <br />
                      <br />
                      En août, je commence un stage de deux mois et demi, une
                      véritable expédition au cœur du monde professionnel du{" "}
                      <strong>développement web.</strong> C'est l'occasion
                      idéale pour moi d'explorer davantage ce domaine, de
                      développer mes compétences et de vivre de nouvelles
                      aventures. Je vous invite à me suivre dans cette
                      incroyable aventure. Sur mon <strong>portfolio</strong>,
                      vous découvrirez mes premières créations, fruits de mes
                      explorations et de mon apprentissage. C'est un peu comme
                      un carnet de voyage numérique où je partage mes
                      découvertes avec vous.
                      <br />
                      <br />
                      Alors, attachez vos ceintures et préparez-vous à explorer
                      le <strong>monde du web</strong> à mes côtés. Même si je
                      suis une débutante, je suis animée d'une curiosité sans
                      limites et d'une envie constante d'apprendre et de
                      grandir. Ensemble, nous allons plonger dans cet océan
                      numérique et découvrir de nouvelles contrées fascinantes !
                      <br />
                      <br />
                      Que l'aventure commence !
                    </span>
                  </>
                ) : (
                  <span className="infoabout__short-text">
                    <div className="infoabout__soustitle">
                      Bonjour et bienvenue dans mon univers !
                    </div>
                    <br />
                    Je suis un véritable caméléon professionnel, ayant passé
                    environ 10 ans dans le monde chatoyant du prêt-à-porter et
                    même quelques escapades dans le secteur médical. Mais un
                    jour, j'ai décidé de prendre une tangente audacieuse vers le{" "}
                    <strong>développement web et mobile.</strong>
                    <br />
                    <br />
                  </span>
                )}
           
             
              <button className="infoabout__button" onClick={handleButtonClick}>
                {showFullText ? "Réduire" : "Lire la suite"}
              </button>
              </div>
            </div>
         
       
      </section>
    </article>
  );
}
