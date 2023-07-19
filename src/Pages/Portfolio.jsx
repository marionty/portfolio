import "../Styles/Styles.css";
import ScrollIndicator from "../Components/ScrollIndicator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState, useEffect } from "react";

const Projects = () => {
  const [projets, setProjets] = useState([]); // Tableau de projets
  const [recherche, setRecherche] = useState(""); // Recherche de projet

  useEffect(() => {
    setProjets([
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

  const handleRechercheChange = (e) => {
    setRecherche(e.target.value);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const projetsFiltres = projets.filter((projet) =>
    projet.name.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <article>
      <ScrollIndicator />
      <section className="my-projects">
        <div className="wrapper-pages">
          {/* Ajoutez vos éléments pour le fond ici */}
          <h3>My projects</h3>
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
            <Carousel responsive={responsive}>
              {/* Parcours des projets filtrés */}
              {projetsFiltres.map((projet, index) => (
                <div className="project-item" key={index}>
                  <h4>{projet.name}</h4>
                  <h5>{projet.technologie}</h5>
                  <img src={projet.image} alt="" />
                  <p>{projet.description}</p>
                  {/* Afficher le lien GitHub */}
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
        </div>
      </section>
    </article>
  );
};

export default Projects;
