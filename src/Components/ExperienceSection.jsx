import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faTimes } from '@fortawesome/free-solid-svg-icons';


const ExperienceSection = ({ experienceData, isMobile }) => {
  const [openDescriptionIndex, setOpenDescriptionIndex] = useState(null);

  const toggleDescription = index => {
    setOpenDescriptionIndex(openDescriptionIndex === index ? null : index);
  };

  const containerStyle = isMobile ? 'experience-container-mobile' : 'experience-container';

  return (
    <div className={containerStyle}>
      {experienceData.map((exp, index) => (
        <div key={index} className="experience-card">
          <div className="experience-date">{exp.date}</div>
          <div className="image-title-container">
            <img src={exp.image} alt="Experience" className="experience-image" />
            <h6 className="experience-title">{exp.title}</h6>
          </div>
          <button className="button-view-more" onClick={() => toggleDescription(index)}>View More</button>
          {openDescriptionIndex === index && (
            <div className="experience-description-overlay">
              <div className="close-overlay-button" onClick={() => toggleDescription(null)}>
                <FontAwesomeIcon icon={faTimes} style={{ color: 'white' }} />
              </div>
              {exp.description.map((desc, i) => <p key={i}>{desc}</p>)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
