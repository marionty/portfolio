import "../Styles/Styles.css";
import ScrollIndicator from "../Components/ScrollIndicator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';

const UIUXDesigner = () => {
  const [projets, setProjets] = useState([]);
  const [recherche, setRecherche] = useState("");

  useEffect(() => {
    setProjets([
      {
        name: "Projet: FitQuest",
        image: "../images/projetWebDesign1.png",
        technologie: "Figma",
        description: {
          contexte: "FitQuest: Motiver les Jeunes à Faire du Sport grâce à l'Engagement Social et la Gamification.",
          objectifs: "Encourager les jeunes à pratiquer davantage de sport.",
          publicCible: "Jeunes de 18 à 30 ans.",
          processus: `
            <ul>
              <li><strong>Recherche Utilisateur :</strong> Enquêtes et interviews pour comprendre les motivations et les obstacles.</li>
              <li><strong>Wireframes :</strong> Conception des premières ébauches pour définir l'architecture de l'application.</li>
              <li><strong>Maquettes :</strong> Création de maquettes haute fidélité avec Figma.</li>
              <li><strong>Prototypes :</strong> Développement de prototypes interactifs pour les tests utilisateurs.</li>
            </ul>
          `,
          fonctionnalites: `
            <ul>
              <li><strong>Carte Interactive :</strong> Visualisation des lieux de sport à proximité.</li>
              <li><strong>Options de Participation :</strong> Sport en solo ou en groupe.</li>
              <li><strong>Challenges et Récompenses :</strong> Gagner des points pour personnaliser l'avatar.</li>
            </ul>
          `,
          resultats: "Application bien accueillie par le jury lors de la présentation. Engagement élevé grâce aux fonctionnalités sociales et de gamification.",
        },
        figmaLink: "https://www.figma.com/proto/ZuLW43ysE0bBbRwSFezLJM/Marion?node-id=149-387&t=gJ0KpepmOaP3yRge-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=149%3A387&show-proto-sidebar=1",
      },
      {
        name: "Projet: Do It Your plan",
        image: "../images/projetWebDesign2.png",
        technologie: "Figma",
        description: {
          contexte: "Une application mobile iOS pour aider les adultes actifs à réaliser leurs projets DIY.",
          objectifs: "Faciliter la création et la gestion des projets DIY étape par étape.",
          publicCible: "Adultes actifs intéressés par les projets DIY.",
          processus: `
            <ul>
              <li><strong>Recherche Utilisateur :</strong> Analyse des besoins et des habitudes des utilisateurs potentiels.</li>
              <li><strong>Wireframes :</strong> Ébauches des écrans principaux pour structurer l'application.</li>
              <li><strong>Maquettes :</strong> Création de maquettes détaillées pour illustrer le design final.</li>
              <li><strong>Prototypes :</strong> Tests de prototypes pour recueillir des feedbacks utilisateurs.</li>
            </ul>
          `,
          fonctionnalites: `
            <ul>
              <li><strong>Création de Projet :</strong> Décomposer les projets en étapes claires.</li>
              <li><strong>Gestion des Projets :</strong> Suivi et gestion des projets en cours.</li>
              <li><strong>Récompenses :</strong> Gagner des points pour débloquer des accessoires pour l'avatar.</li>
            </ul>
          `,
          resultats: "Application très appréciée par le jury pour sa simplicité et son efficacité dans la gestion des projets DIY.",
        },
        figmaLink:"https://www.figma.com/proto/DhwZwJUeIFbj6K4YdXAW8X/DoItYourPlan?node-id=4-877&t=ioR3j4b1gPkiDJA7-1&scaling=scale-down&page-id=0%3A1",
      },
      {
        name: "Projet: La liane bleue",
        image: "../images/projetLalianebleue.png",
        technologie: "Figma",
        description: {
          contexte: "Un site web pour faciliter la gestion des réservations et fournir des informations pour les voyageurs.",
          objectifs: "Offrir une expérience fluide et conviviale pour les utilisateurs.",
          publicCible: "Voyageurs intéressés par l'île de la Réunion.",
          processus: `
            <ul>
              <li><strong>Recherche Utilisateur :</strong> Collecte des besoins des administrateurs et des visiteurs.</li>
              <li><strong>Wireframes :</strong> Conception des wireframes pour définir la structure du site.</li>
              <li><strong>Maquettes :</strong> Création de maquettes visuelles détaillées.</li>
              <li><strong>Prototypes :</strong> Développement de prototypes interactifs pour les tests utilisateurs.</li>
            </ul>
          `,
          fonctionnalites: `
            <ul>
              <li><strong>Gestion des Réservations :</strong> Interface pour réserver des billets et des services.</li>
              <li><strong>Informations Essentielles :</strong> Détails sur les destinations et activités à l'île de la Réunion.</li>
              <li><strong>Inspiration de Voyage :</strong> Témoignages, photos et vidéos pour inspirer les visiteurs.</li>
            </ul>
          `,
          resultats: "Site web apprécié pour sa facilité d'utilisation et ses fonctionnalités complètes pour les voyageurs.",
        },
        figmaLink: "https://www.figma.com/design/11wwepNDgmWMzcMPkOWV56/la-liane-bleue?t=8KLdi792zres91hS-1",
      },
    ]);
  }, []);

  const handleRechercheChange = (e) => {
    setRecherche(e.target.value);
  };

  const breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 16,
      navigation: false,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 16,
      navigation: false,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  };

  const projetsFiltres = projets.filter((projet) =>
    projet.name.toLowerCase().includes(recherche.toLowerCase())
  );

  const screenWidth = window.innerWidth;

  return (
    <article>
      <ScrollIndicator />
      <section className="my-projects">
        <div className="wrapper-pages">
          <div className="object3"></div>
          <div className="object4"></div>
          <div className="object5"></div>
        </div>
        <h3>My UI/UX design projects</h3>
        <div className="input-projects">
          <input
            type="text"
            placeholder="Rechercher un projet"
            value={recherche}
            onChange={handleRechercheChange}
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="container-projects-designer">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
navigation={screenWidth > 500}
modules={[EffectCoverflow, Pagination, Navigation]}
className="mySwiper"
breakpoints={breakpoints}
          >
            {projetsFiltres.map((projet, index) => (
              <SwiperSlide key={index}>
                <div className="project-item-designer">
                  <div className="top-section-designer">
                    <img src={projet.image} alt=""   className={index === 1 ? 'second-image' : ''} />
                  </div>
                  <div className="project-details-designer">
                    <h4>{projet.name}</h4>
                    <h5>{projet.technologie}</h5>
                    <div>
                    <div className="project-context">
                      <p><strong>Contexte :</strong> {projet.description.contexte}</p></div>
                      <p><strong>Objectifs :</strong> {projet.description.objectifs}</p>
                      <p><strong>Public Cible :</strong> {projet.description.publicCible}</p>
                    </div>
                    <div className="project-info-columns">
                      <div className="project-info-column">
                        <p><strong>Processus :</strong></p>
                        <div dangerouslySetInnerHTML={{ __html: projet.description.processus }}></div>
                      </div>
                      <div className="project-info-column">
                        <p><strong>Fonctionnalités :</strong></p>
                        <div dangerouslySetInnerHTML={{ __html: projet.description.fonctionnalites }}></div>
                      </div>
                    </div>
                    <div className="project-result">
                      <p><strong>Résultats :</strong> {projet.description.resultats}</p>
                    </div>
                    {projet.figmaLink && (
                      <button
                        onClick={() => window.open(projet.figmaLink, '_blank')}
                        className="figma-button"
                      >
                        <FontAwesomeIcon icon={faFigma} />
                        Voir le Prototype
                      </button>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </article>
  );
};

export default UIUXDesigner;
