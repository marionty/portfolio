import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Rocket from "../Components/rocket";
import ScrollIndicator from "../Components/ScrollIndicator";
import HobbiesCarousel from "../Components/HobbiesCarousel";
import Typed from "typed.js";

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
      strings: ["web developer", "mobile developer","UI/UX Designer"], // Les phrases à afficher dans l'animation
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
              I'm{" "}
              <span ref={el} className="multiText">
                web developer
                mobile developer
                UI/UX Designer
              </span>
            </h1>
            <div className="button-profil">
              <a
                href="/images/cv MT CDA.pdf"
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
                  Je suis une professionnelle caméléon, ayant évolué pendant une
                  décennie dans le dynamique domaine du prêt-à-porter, avec
                  quelques incursions dans le secteur médical. Mais un jour,
                  j'ai décidé de m'engager sur une voie audacieuse :
                  <strong>le développement web et mobile.</strong>
                  <br />
                  <br />
                </span>
                <span className="infoabout__full-text">
                  En février 2023, j'ai entrepris une formation en développement
                  web et mobile, aboutissant récemment à l'obtention avec succès
                  de ma <strong>certification RNCP bac +2,</strong>
                  marquant ainsi une étape cruciale dans mon parcours. Durant
                  cette formation, j'ai exploré avec passion les langages
                  front-end et back-end, naviguant à travers un univers
                  fascinant composé de{" "}
                  <strong>
                    JavaScript, PHP, et autres langages de programmation.
                  </strong>
                  <br />
                  <br />
                  Mon expérience s'est enrichie lors d'un stage de deux mois et
                  demi chez <strong>Lota.Cloud, </strong>
                  où j'ai plongé au cœur du monde professionnel du développement
                  web. Cette opportunité m'a permis de{" "}
                  <strong>consolider mes compétences, </strong>
                  relever de nouveaux défis et vivre des aventures
                  enrichissantes.
                  <br />
                  <br />
                  <span className="purple-text">
                    Actuellement, je suis à la recherche d'une entreprise pour{" "}
                    <strong>un contrat en apprentissage de 15 mois, </strong>
                    dans le cadre d'un titre de Concepteur Développeur
                    d'Applications bac+4. Mobile partout en France, je suis
                    prête à m'engager pleinement. Mon appétence pour{" "}
                    <strong>le front-end et le UI/UX design, </strong>
                    ainsi que ma spécialisation en{" "}
                    <strong>développement iOS avec Swift, </strong>
                    sont des atouts que je souhaite mettre à profit dans un
                    environnement professionnel stimulant.
                  </span>
                  <br />
                  <br />
                  Je suis également prête à intégrer{" "}
                  <strong>
                    le rythme de 3 semaines en entreprise et 1 semaine en
                    formation à la Wild Code School.{" "}
                  </strong>
                  La rentrée est prévue au plus tard pour{" "}
                  <strong>septembre. </strong>
                  Ayant réussi les examens d'entrée avec succès, je suis
                  impatiente de relever de nouveaux défis et de continuer à
                  explorer les vastes étendues du monde du web.
                  <br />
                  <br />
                  Malgré mon statut de débutante, je suis animée par une
                  <strong>curiosité </strong> sans limites et une <strong>volonté constante d'apprendre</strong> et
                  de progresser. Ensemble, nous plongerons dans l'océan
                  numérique et découvrirons de nouvelles contrées fascinantes !
                  <br />
                  <br />
                  Alors, embarquez avec moi dans cette aventure passionnante !
                </span>
              </>
            ) : (
              <span className="infoabout__short-text">
                <div className="infoabout__soustitle">
                  Bonjour et bienvenue dans mon univers !
                </div>
                <br />
                Je suis une professionnelle caméléon, ayant évolué pendant une
                  décennie dans le dynamique domaine du prêt-à-porter, avec
                  quelques incursions dans le secteur médical. Mais un jour,
                  j'ai décidé de m'engager sur une voie audacieuse :
                  <strong>le développement web et mobile.</strong>
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

      <h3>Hobbies</h3>
      <HobbiesCarousel />
    </article>
  );
}
