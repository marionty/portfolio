import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Rocket from "../Components/rocket";
import ScrollIndicator from "../Components/ScrollIndicator";
import HobbiesCarousel from "../Components/HobbiesCarousel";
import Typed from 'typed.js';


export default function Home() {
  // Déclaration des états showFullText et loading à l'aide de useState hooks
  const [showFullText, setShowFullText] = useState(false);
  const [loading, setLoading] = useState(false);
  

  // Création d'une référence à un élément DOM (utilisée pour Typed.js)
  const el = useRef(null);

  // Utilisation de useEffect hook pour effectuer des opérations au chargement du composant
  useEffect(() => {
    // Définition de l'état loading à true pour indiquer que le contenu est en cours de chargement
    setLoading(true);

    // Initialisation de Typed.js pour l'animation du texte dans l'élément référencé par "el"
    const typed = new Typed(el.current, {
      strings: ['web developer'], // Les phrases à afficher dans l'animation
      loop: true, // Permet de répéter l'animation en boucle
      typeSpeed: 100, // Vitesse de frappe de chaque lettre
      backSpeed: 80, // Vitesse de la suppression de chaque lettre
      backDelay: 1500, // Temps d'attente avant de commencer à supprimer le texte
    });

    // Utilisation de setTimeout pour simuler un délai de chargement (2 secondes) avant de terminer le chargement
    setTimeout(() => {
      setLoading(false); // Définition de l'état loading à false pour indiquer que le chargement est terminé
    }, 2000);

    // La fonction renvoyée par useEffect est utilisée pour effectuer un nettoyage lorsqu'un composant est démonté
    return () => {
      // Nettoyage de Typed.js lorsqu'il n'est plus utilisé pour éviter les fuites de mémoire
      typed.destroy();
    };
  }, []); // Le tableau vide en second argument signifie que cette fonction useEffect sera exécutée une seule fois au chargement initial du composant

  // Gestionnaire d'événement pour le clic sur un bouton
  const handleButtonClick = () => {
    // Inversion de la valeur de showFullText à chaque clic sur le bouton
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
                href="/images/CV TytgatM Alternance.pdf"
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
                      En février 2023, j'ai débuté une formation de <strong>développeur web et mobile.
                        </strong> J'ai récemment validé avec succès ma certification RNCP bac +2, marquant ainsi une étape cruciale dans mon parcours. 
                        Au cours de cette formation, j'ai exploré avec émerveillement les langages du front-end et du back-end, 
                        naviguant à travers la jungle mystérieuse du <strong>JavaScript, PHP</strong>, et d'autres créatures de code étranges.
                      <br />
                      <br />
                      Mon aventure s'est enrichie lors de mon stage de deux mois et demi chez Lota.Cloud, 
                      plongeant au cœur du monde professionnel du <strong>développement web.
                        </strong> Cette expérience m'a permis d'approfondir mes compétences, de relever de nouveaux défis et de vivre des aventures inédites. 
                       
                      <br />
                      <br />
                      <span className="purple-text">Actuellement, je suis à la recherche d'une entreprise en <strong>alternance</strong> pour un titre de <strong>Concepteur Développeur d'Applications</strong> bac+4, dans le cadre d'un <strong>contrat de professionnalisation</strong> d'une durée de <strong>15 mois.</strong>
                      Le rythme sera de 3 semaines en entreprise et 1 semaine en formation à la Wild Code School. 
                      La rentrée est prévue au plus tard le <strong>pour septembre</strong>. Ayant passé avec succès les examens d'entrée, je suis prête à relever de nouveaux défis et à continuer à explorer les vastes étendues du <strong>monde du web</strong>.</span>
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
           
             
              <button 
      className="infoabout__button" onClick={handleButtonClick}>
                {showFullText ? "Réduire" : "Lire la suite"}
              </button>
              </div>
            </div>
         
       
      </section>
  
      <h3>Hobbies</h3>
      <HobbiesCarousel />
      
    </article>
  );
                }
