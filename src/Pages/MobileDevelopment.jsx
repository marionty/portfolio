import "../Styles/Styles.css";
import ScrollIndicator from "../Components/ScrollIndicator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';


const MobileDevelopment = () => {
  // État pour stocker les projets
  const [projets, setProjets] = useState([]); // Tableau de projets

  // État pour stocker la valeur de recherche
  const [recherche, setRecherche] = useState(""); // Recherche de projet
 
  // Utilisation de useEffect pour initialiser les projets au chargement de la page
  useEffect(() => {
    setProjets([
      
     
      {
        name: "Projet: FitQuest",
        image: "../images/projetWebDesign1.png",
        technologie: "Framework: SwiftUI",
        description: "Une application mobile ios, sur le théme du sport, pour répondre à une problèmatique: 'Comment motiver les jeunes à faire plus de sport?', L'application FitQuest allie à la fois le sport, le social, et la gamification (récompenses). L'utilisateur, identifié par un avatar, accéde au 1er écran qui est une map, et visualise les lieux de sport accessibles dans sa locatisation, décide de faire du sport seul ou en groupe et de se défier au différents challenges proposés pour gagner des haltères (points) lui permettant de changer la tenue de son avatar.  " ,
        githubLink: "https://github.com/marionty/MyApplication",
      },
      {
        name: "Projet: Do It Your plan",
        image: "../images/projetWebDesign2.png",
        technologie: "Framework: SwiftUI",
        description: "Une application mobile ios, sur le théme de la créativité, pour répondre à une problèmatique: 'Comment aider les adultes actifs à réaliser et aboutir leurs projets DIY', L'application Do it Your Plan permet aux utilisateurs de créer un projet DIY, étapes par étapes, à chaques étapes finalisées ils gagnent des points lui permettant de débloquer des accessoires pour son avatar, il peut accéder à sa liste de projets en cours, ainsi qu'à son planning pour sa gestion de début et de fin de projets et sa bibliothéques, ou il pourra répertorier toutes ses inspirations, vidéos. " ,
       
      },
      
     
    ]);
  }, []);

  // Gestionnaire de changement de champ de recherche
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
  
  // Filtrage des projets en fonction de la recherche
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
        <h3>My mobile projects </h3>
        {/* Champ de recherche */}
        <div className="input-projects">
          <input
            type="text"
            placeholder="Rechercher un projet"
            value={recherche}
            onChange={handleRechercheChange}
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="container-projects">
          {/* Carousel pour afficher les projets filtrés */}
          
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
            <div className="project-item">
            <div className="top-section">
              {/* Image du projet */}
      <img src={projet.image} alt=""  className={index === 1 ? 'second-image' : ''}/>
      </div>

{/* Détails du projet */}
<div className="project-details">
  <h4>{projet.name}</h4>
  <h5>{projet.technologie}</h5>
  <p>{projet.description}</p>

  {/* Lien vers GitHub */}
  {projet.githubLink && (
     <button
     onClick={() => window.open(projet.githubLink, '_blank')}
     className="github-button"
   >
     <FontAwesomeIcon icon={faGithub} />
     Voir sur GitHub
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



export default MobileDevelopment;
