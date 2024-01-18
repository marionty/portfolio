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
import SkillCard from "../Components/SkillCard";
import EducationSection from "../Components/EducationSection";


const Skill = () => {
  // État pour stocker les compétences
  const [skills, setSkills] = useState([]); // Tableau de compétences*/

  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Utilisation de useEffect pour initialiser les compétences au chargement de la page
  useEffect(() => {
    setSkills([
      // Exemple de données de compétences
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
    setExperienceData([
      {
        title: (
          <>
            Novembre - décembre 2022 <strong>&rarr;</strong> <strong>Programme BTech à Euratechnologie</strong>
          </>
        ),
        points: [
          "- Découverte des métiers du Web - Recherche de formation",
          "- Initiation au coding",
          "- Création de site internet"
          
        ],
      },
      {
        title: (
          <>
            Août - octobre 2023 <strong>&rarr;</strong> <strong>Stage de Développeuse web et web mobile chez Lota.cloud, Alacrité France</strong>
          </>
        ),
        points: [
          " Développer la partie front-end d’une application web ou web mobile en intégrant les recommandations de sécurité",
          "- Maquetter une application",
          "- Réaliser une interface utilisateur web statique et adaptable.",
          "- Développer une interface utilisateur web dynamique.",
          "- Réaliser une interface utilisateur avec une solution de gestion de contenu. ",
          " Développer la partie back-end d’une application web ou web mobile en intégrant les recommandations de sécurité",
          "- Créer une base de données.",
          "- Développer les composants d’accès aux données.",
          "- Développer la partie back-end d’une application web ou web mobile.",
          "- Élaborer et mettre en œuvre des composants dans une application de gestion de contenu."
        ],
      },
      {
        title: (
          <>
            Novembre - décembre 2023 <strong>&rarr;</strong> <strong>Apple Foundation Program -
Développement mobile iOS à Simplon</strong>
          </>
        ),
        points: [
          "- Mener une investigation du domaine choisi, identifier des besoins, concevoir une solution",
          "- Maquetter l’interface d’une application mobile iOS avec Figma",
          "- Bases de Swift et SwiftUI",
          "- Développement du prototype en groupe - Présentations finales en groupe"
        ],
      },
    ]);
    
  }, []);

  return (
    <article>
      <ScrollIndicator />
      <section className="skills">
        <h3>Skills</h3>
        <div className="flex-col">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              type={skill.type}
              description={skill.description}
            />
          ))}
        </div>
      </section>
      <section className="Soft-Skills">
        <h3>Soft Skills</h3>
        <div className="softskill">
          <div className={`menu ${menuActive ? "active" : ""}`}>
            <div className="toggle" onClick={toggleMenu}>
              <img src="images/knowhow.png" alt="" />
            </div>
            <ul>
              <li style={{ "--i": 0 }}>
                <span>Problem Solving</span>
              </li>
              <li style={{ "--i": 1 }}>
                <span>Creativity</span>
              </li>
              <li style={{ "--i": 2 }}>
                <span>Organizational</span>
              </li>
              <li style={{ "--i": 3 }}>
                <span>Teamwork</span>
              </li>
              <li style={{ "--i": 4 }}>
                <span>Adaptability</span>
              </li>
              <li style={{ "--i": 5 }}>
                <span>Self-Motivation</span>
              </li>
              <li style={{ "--i": 6 }}>
                <span>Communication</span>
              </li>
              <li style={{ "--i": 7 }}>
                <span>Dynamic</span>
              </li>
              <li style={{ "--i": 8 }}>
                <span>Curious</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3>Education</h3>
        <EducationSection
          educationData={educationData}
          setEducationData={setEducationData}
        />
      </section>

      <section className="Experience">
        <h3>Expérience</h3>
        <div className="experience-grid">
          {experienceData.map((experience, index) => (
            <div key={index} className="experience-item">
              <div
                className="experience-title"
                onClick={() =>
                  setSelectedExperience(
                    selectedExperience === index ? null : index
                  )
                }
              >
                {experience.title}
              </div>
              {selectedExperience === index && (
                <div className="experience-points">
                  {experience.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="experience-point">
                      {point}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Ajoutez les cercles le long de la ligne horizontale */}
        <div className="horizontal-line">
          {experienceData.map((experience, index) => (
            <div key={index} className="experience-circle" />
          ))}
        </div>
      </section>
    </article>
  );
};

export default Skill;
