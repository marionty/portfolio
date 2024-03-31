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


const Projects = () => {
  // État pour stocker les projets
  const [projets, setProjets] = useState([]); // Tableau de projets

  // État pour stocker la valeur de recherche
  const [recherche, setRecherche] = useState(""); // Recherche de projet
 
  // Utilisation de useEffect pour initialiser les projets au chargement de la page
  useEffect(() => {
    setProjets([
      // Exemple de données de projets
      {
        name: "Projet: Mon Portfolio",
        image: "../images/projetPortfolioReact.png",
        technologie: "Framework: React js",
        description: "Création de mon portfolio, du maquettage au code, un enchainement d'animation en tout genre pour vous racontez mon aventure et ma reconversion dans le monde du développement web. N'hésitez pas à me donner vos avis et vos conseils via le formulaire de contact",
        githubLink: "https://github.com/marionty/portfolio",
      },
      {
        name: "Projet: FitQuest",
        image: "../images/projetSwift1.png",
        technologie: "ramework: SwiftUI",
        description: "Une application mobile ios, sur le théme du sport, pour répondre à une problèmatique: 'Comment motiver les jeunes à faire plus de sport?', L'application FitQuest allie à la fois le sport, le social, et la gamification (récompenses). L'utilisateur, identifié par un avatar, accéde au 1er écran qui est une map, et visualise les lieux de sport accessibles dans sa locatisation, décide de faire du sport seul ou en groupe et de se défier au différents challenges proposés pour gagner des haltères (points) lui permettant de changer la tenue de son avatar.  " ,
        githubLink: "https://github.com/marionty/MyApplication",
      },
      {
        name: "Projet: Do It Your plan",
        image: "../images/projetSwift2.png",
        technologie: "Framework: SwiftUI",
        description: "Une application mobile ios, sur le théme de la créativité, pour répondre à une problèmatique: 'Comment aider les adultes actifs à réaliser et aboutir leurs projets DIY', L'application Do it Your Plan permet aux utilisateurs de créer un projet DIY, étapes par étapes, à chaques étapes finalisées ils gagnent des points lui permettant de débloquer des accessoires pour son avatar, il peut accéder à sa liste de projets en cours, ainsi qu'à son planning pour sa gestion de début et de fin de projets et sa bibliothéques, ou il pourra répertorier toutes ses inspirations, vidéos. " ,
       
      },
      {
        name: "Projet: La liane bleue",
        image: "../images/projetLalianebleue.png",
        technologie: "Framework: Vue js, Quasar et Strapi",
        description: "Réalisé pour mon examen, il vise à offrir aux utilisateurs une expérience fluide et conviviale. Grâce à des fonctionnalités adaptées pour les administrateurs et les visiteurs, le site facilite la gestion des réservations et fourni des informations essentielles pour les futurs voyageurs. L'idée ici est surtout de donner l'envie aux visiteurs de prendre un billet pour l'île de la Réunion.",
        githubLink: "https://github.com/marionty/la-liane-bleue",
      },
      {
        name: "Projet: Portfolio One page",
        image: "../images/projetportfolioJavascript.png",
        technologie: "langage: javascript",
        description: "Un simple portfolio one page ou j'ai découvert mes premières animations en javascript, je vous présente mes anciennes expèriences professionnelles et ma reconversion dans le monde du web.",
        githubLink: "https://github.com/marionty/portfolio-javascript",
      },
      {
        name: "Projet: Titi Burger",
        image: "../images/projetTitiBurger.png",
        technologie: "Framework: React js",
        description: "Ce site permet la commande de menu fast-food au fur et à mesure des pages, pour arriver au panier total de la commande.",
        githubLink: "https://github.com/marionty/titiburgerreact",
      },
      {
        name: "Projet: Prepagence Immo",
        image: "../images/projetAgenceImmo.png",
        technologie: "Framework: React js",
        description: "Découverte du framework React au travers de la création d'une page de présentation des logements d'une agence immobilière, et d'un bouton en savoir plus pour avoir les détails du logement selectionné .",
        githubLink: "https://github.com/marionty/logements",
      },
      {
        name: "Projet: EasyRésa",
        image: "../images/projetEasyResa.png",
        technologie: "Framework: Symfony",
        description: "Un site qui permet de réserver une salle de réunion, une page rooms pour visualier toutes les salles de réunion disponibles par critéres, une inscription pour créer son compte et accéder à ses réservations (modifier, annuler), une page contact contenant un formulaire",
        githubLink: "https://github.com/marionty/easyresa",
      },
      {
        name: "Projet: Base Portfolio",
        image: "../images/projetPortfolioSymfony.png",
        technologie: "Framework: Symfony",
        description: "Voici une bonne base pour créer un portfolio avec Symfony, plusieurs pages, associé à une base de donnée avec les différentes expériences, educations, projects et une page contact avec son formulaire",
        githubLink: "https://github.com/marionty/portfolio-tp-master",
      },
      {
        name: "Projet: BiblioApp",
        image: "../images/projetBiblioApp.png",
        technologie: "Framework: Symfony",
        description: "Gérer la logistique d'une bibliothèque avec BiblioApp. Ajouter des clients ainsi quedes emprunts. Apprentissage de la Programmation Orientée objet en PHP: l'entity rental est lié aux entity Book et Client. On peut remarquer que je n'ai pas encore découvert ma passion du front à travers ces projets Symfony.",
        githubLink: "https://github.com/marionty/biblio-app",
      },
      {
        name: "Projet: Blog",
        image: "../images/projetBlog.png",
        technologie: "Framework: Symfony",
        description: "Projet sur la gestion de l’authentification, une page d'inscription, de connexion de l'utilisateur pour accéder à la création d'articles de Blog. ",
        githubLink: "https://github.com/marionty/tp-blog",
      },
      {
        name: "Projet: Todo",
        image: "../images/projetTodo.png",
        technologie: "Framework: Symfony",
        description: "Projet sur la gestion de l’authentification avec un hash de mot de passe, puisque pour accéder à son espace et à sa liste de chose à faire, il faut absolument s'identifier. ",
        githubLink: "https://github.com/marionty/todo-app",
      }, 
     
      {
        name: "Projet: Site de musiciens",
        image: "../images/projetHtmlCss.png",
        technologie: "Langage: HTML/CSS",
        description: "Mes premières lignes de codes en HTML/CSS, ce site permet de rechercher des musiciens qui donnent des cours, et de connaitre leurs tarifs et les avis",
        githubLink: "https://github.com/marionty/sitemusiciens-corrig-",
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
    spaceBetween: 0,
    navigation: false,
    },
    480: {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: false,
    },
    768: {
    slidesPerView: 2,
    spaceBetween: 0,
    },
    1440: {
    slidesPerView: 3,
    spaceBetween: 0,
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
        <h3>My projects</h3>
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
        slidesPerView={3}
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
            <div className={`project-item ${index === 1 || index === 2 ? 'special-image' : ''}`}>
            <div className="top-section">
              {/* Image du projet */}
      <img src={projet.image} alt="" />
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

export default Projects;
