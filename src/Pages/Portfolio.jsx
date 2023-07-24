import "../Styles/Styles.css";
import ScrollIndicator from "../Components/ScrollIndicator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState, useEffect } from "react";

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
        name: "Portfolio",
        image: "../images/portfolio-tp-master.png",
        technologie: "Symfony",
        description: "Voici une bonne base pour créer un portfolio avec Symfony, plusieurs pages, associé à une base de donnée avec les différentes expériences, educations, projects et une page contact avec son formulaire",
        githubLink: "https://github.com/marionty/portfolio-tp-master",
      },
      {
        name: "Réservation de salle de réunion",
        image: "../images/easyresa.png",
        technologie: "Symfony",
        description: "Un site qui permet de réserver une salle de réunion, une page rooms pour visualier toutes les salles de réunion disponibles par critéres, une inscription pour créer son compte et accéder à ses réservations (modifier, annuler), une page contact contenant un formulaire",
        githubLink: "https://github.com/marionty/easyresa",
      },
      {
        name: "Site de musiciens",
        image: "",
        technologie: "HTM/CSS",
        description: "Découverte HTML/CSS",
        githubLink: "https://github.com/votre-utilisateur/nom-du-projet",
      },
      {
        name: "Portfolio",
        image: "",
        technologie: "React js",
        description: "lorem",
        githubLink: "https://github.com/votre-utilisateur/nom-du-projet",
      },
    ]);
  }, []);

  // Gestionnaire de changement de champ de recherche
  const handleRechercheChange = (e) => {
    setRecherche(e.target.value);
  };

  // Configuration responsive pour le carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1116 },
      items: 2,
      slidesToSlide: 2, 
    },
    tablet: {
      breakpoint: { max: 1116, min: 464 },
      items: 1,
      slidesToSlide: 1, 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, 
    },
  };

  // Filtrage des projets en fonction de la recherche
  const projetsFiltres = projets.filter((projet) =>
    projet.name.toLowerCase().includes(recherche.toLowerCase())
  );

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
          <Carousel responsive={responsive}>
            {projetsFiltres.map((projet, index) => (
              <div className="project-item" key={index}>
                {/* Détails du projet */}
                <h4>{projet.name}</h4>
                <h5>{projet.technologie}</h5>
                <img src={projet.image} alt="" />
                <p>{projet.description}</p>
                {/* Lien vers GitHub */}
                {projet.githubLink && (
                  <a
                    href={projet.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    Voir sur GitHub
                  </a>
                )}
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </article>
  );
};

export default Projects;
