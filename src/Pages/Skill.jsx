import "../Styles/Styles.css";
import ScrollIndicator from "../Components/ScrollIndicator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importation des icônes utilisées
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faPhp,
  faSymfony,
  faMicrosoft,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Skills() {
  const [skills, setSkills] = useState([]); // Tableau de compétences
  const [zoomedIndex, setZoomedIndex] = useState(-1); // Index de la compétence zoomée (-1 par défaut)

  useEffect(() => {
    setSkills([
      {
        icon: faHtml5,
        title: "HTML",
        type: "Langage de balisage",
        description:
          "C'est la base! le langage de balisage standard utilisé pour créer la structure et le contenu d'une page web.",
      },

      {
        icon: faCss3Alt,
        title: "CSS",
        type: "Langage de feuille de style",
        description:
          "Langage utilisé pour définir l'apparence et la mise en page d'une page web.",
      },
      {
        icon: faJs,
        title: "Javascript",
        type: "Langage de programmation de scripts",
        description:
          "Je l'ai utilisé pour concevoir des sites web interactifs. Les fonctions JavaScript m'ont permis d'améliorer l'expérience utilisateur d'un site web, comme l'affichage d'animations et de cartes interactives. Par exemple un carrousel d'images, un menu déroulant « Cliquer pour afficher » ou le changement dynamique de la couleur des éléments d'une page web. ",
      },

      {
        icon: faReact,
        title: "React",
        type: "Bibliothèque JavaScript libre",
        description:
          "Elle permet de simplifier la création d'interface, et une synchronisation plus simple et plus efficace entre les données de l'application et le rendu Html. Je l'ai utilisé pour construire ce portfolio et un site pour commander des burgers. ",
      },

      {
        icon: faNodeJs,
        title: "Node js",
        type: "Plateforme logicielle libre en JavaScript",
        description:
          "Permettant de créer des applications rapides et évolutives côté serveur et en réseau. Par exemple pour mon projet de commande de burger, le panier de paiement, le formulaire de contact, et la gestion utilisateurs.",
      },
      {
        icon: faPhp,
        title: "PHP",
        type: "Langage de programmation libre",
        description:
          "Principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP. PHP est un langage impératif orienté objet. Il s'agit d'un langage de script interprété côté serveur.",
      },

      {
        icon: faDatabase,
        title: "Mysql",
        type: "Système de gestion de bases de données relationnelles",
        description:
          "Lieu de stockage et d'enregistrement des données, que celles-ci soient ou non cryptées. Il est alors ensuite possible, via une requête SQL, d'aller récupérer des informations sur ce serveur très rapidement. C'est le cas, par exemple, avec les mots de passe enregistrés sur des sites web.",
      },

      {
        icon: faSymfony,
        title: "Symfony",
        type: "Framework PHP",
        description:
          "J'ai développé différents projets en symfony, ainsi utiliser des composants, comme Forms pour la création et le traitement des formulaire HTML, mailer pour l’envoi des mail et la construction de CRUD",
      },
      {
        icon: faWordpress,
        title: "Wordpress",
        type: "CMS, système de gestion de contenu gratuit, libre et open-source.",
        description:
          "Ce logiciel écrit en PHP repose sur une base de données MySQL, il permet de publier et de gérer des contenus sur Internet. j'ai ainsi pu mettre en place un portfolio proposant un service de création de site web.",
      },
      {
        icon: faMicrosoft,
        title: "Pack office",
        type: "Suite bureautique mise au point par Microsoft",
        description:
          "Comprend 4 logiciels principaux que j'ai réguliérement utilisé dans mes précédents postes",
      },
    ]);
  }, []);

  const handleZoomClick = (index) => {
    if (index === zoomedIndex) {
      setZoomedIndex(-1); // Dézoomer si la même compétence est cliquée à nouveau
    } else {
      setZoomedIndex(index); // Zoomer la compétence correspondante
    }
  };

  return (
    <article>
      
        <ScrollIndicator />
        <section className="skills">
          <h3>Skills</h3>
          <div className="flex-col">
            {/* Parcours du tableau de compétences */}
            {skills.map((skill, index) => (
              <div
                className={`Skill${index === zoomedIndex ? " zoomed" : ""}`}
                key={skill.title}
                onClick={() => handleZoomClick(index)}
              >
                {/* Contenu de la compétence */}
                <div className="Skill-content">
                  <FontAwesomeIcon icon={skill.icon} className="icon" />
                  <h4>{skill.title}</h4>
                  <h5>{skill.type}</h5>
                  <p>{skill.description}</p>
                  {/* Afficher le bouton de zoom si la compétence n'est pas zoomée */}
                  {index !== zoomedIndex && (
                    <button
                      className="zoom-button"
                      onClick={() => handleZoomClick(index)}
                    >
                      Zoom
                    </button>
                  )}
                </div>
                {/* Afficher le bouton de fermeture si la compétence est zoomée */}
                {index === zoomedIndex && (
                  <div
                    className="close-button"
                    onClick={() => handleZoomClick(-1)}
                  >
                    X
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="Soft-Skills">
          <h3>Soft Skills</h3>
          <div className="soft-skills-grid">
          <div className="soft-skill">
            <div
              className="soft-skill-icon"
              data-content="Problem Solving"
            ></div>
          </div>
          <div className="soft-skill">
            <div className="soft-skill-icon" data-content="Creativity"></div>
          </div>
          <div className="soft-skill">
            <div
              className="soft-skill-icon"
              data-content="Organizational"
            ></div>
          </div>
          <div className="soft-skill">
            <div className="soft-skill-icon" data-content="Teamwork"></div>
          </div>
          <div className="soft-skill">
            <div className="soft-skill-icon" data-content="Adaptability"></div>
          </div>
          <div className="soft-skill">
            <div
              className="soft-skill-icon"
              data-content="Self-Motivation"
            ></div>
          </div>
          <div className="soft-skill">
            <div className="soft-skill-icon" data-content="Communication"></div>
          </div>
          <div className="soft-skill">
            <div className="soft-skill-icon" data-content="Dynamic"></div>
          </div>
          <div className="soft-skill">
            <div className="soft-skill-icon" data-content="Curious"></div>
          </div>
          </div>
        </section>
      
    </article>
  );
}