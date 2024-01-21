// EducationSection.js
import React, { useState, useEffect } from "react";

const EducationSection = ({ educationData, setEducationData }) => {
  const [expandedSections, setExpandedSections] = useState({});


  const toggleSection = (index) => {
    
    setExpandedSections((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  // Utilisez useEffect pour mettre à jour l'état educationData une seule fois
  useEffect(() => {
    // Mettez à jour l'état educationData si nécessaire
    if (educationData.length === 0) {
      setEducationData([
        {
          title: (
            <>
              <span>Février - Novembre 2023</span> <strong>&rarr;</strong>{" "}
              <strong>
                Certification du titre professionnel Développeur web et web
                mobile
              </strong>
            </>
          ),
          content: (
            <div>
            Le <strong>développeur web et web mobile </strong>réalise des sites web ou web mobile sécurisés
            et des applications d'entreprise web ou web mobile sécurisées destinées à des salariés.
            Il les développe avec des langages adaptés aux technologies dédiées à l'architecture
            web ou web mobile, <strong>coté navigateur et coté serveur. </strong>
          </div>
          ),
          
        },
        {
          title: (
          <>
              <span>2019 - 2021</span> <strong>&rarr;</strong>{" "}
              <strong>
              BTS Support à l'Action Managériale
              </strong>
            </>
      ),
          content: (
            <div>
          Le titulaire du <strong>BTS SAM </strong>développe des compétences relationnelles, organisationnelles et administratives. Il remplit des activités de soutien et des activités déléguées plus ou moins spécialisées selon le service. Il est à même <strong>d'organiser des événements, des déplacements,</strong> de gérer l'information et de prendre en charge un certain nombre de dossiers, administratifs ou directement liés à l'activité générale de <strong>l'organisation.</strong> Il travaille dans une entreprise, une association, une administration ou tout autre type d'organisation.",
          </div>
          ),
        },
        {
          title: (
            <>
                <span>2005 - 2007</span> <strong>&rarr;</strong>{" "}
                <strong>
                BAC Sciences Médico Sociales
                </strong>
              </>
        ),
          
        content: (
          <>
            Le programme de la section <strong>Sciences Médico-Sociales</strong> permet d'acquérir les connaissances et savoir-faire nécessaires pour :
            <ul>
              <li>préparer les concours d'entrée dans le <strong>secteur paramédical</strong> (infirmier, orthophoniste, ambulancier, ergothérapeute, podologue, pédicure...)</li>
              <li>occuper un poste de <strong>secrétariat médical</strong> ou de secrétariat scientifique</li>
              <li>poursuivre des études à l'université dans le <strong>secteur scientifique, sociologique, social.</strong></li>
            </ul>
          </>
         ),
        },
      ]);
    }
  }, [educationData, setEducationData]);


  return (
    <div className="container">
      {educationData.map((section, index) => (
        <div key={index} className="section">
          <div
            className={`section-header ${expandedSections[index] ? "active" : ""}`}
          >
            <div>{section.title}</div>
            <div
              onClick={() => toggleSection(index)}
              className="expand-button"
            >
              {expandedSections[index] ? "-" : "+"}
            </div>
          </div>
          {expandedSections[index] && (
            <div className="section-content">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EducationSection;
