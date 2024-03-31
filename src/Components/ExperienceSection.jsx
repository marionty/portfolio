import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const ExperienceSection = ({ experienceData, isMobile }) => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleExperienceClick = (index) => {
    setSelectedExperience(selectedExperience === index ? null : index);
  };

  return (
    <section className="Experience">
      <h3>Expérience</h3>
      {isMobile ? (
        <div className="vertical-line">
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className={`experience-circle ${selectedExperience === index ? 'rotate' : ''}`}
              onClick={() => handleExperienceClick(index)}
            >
              <FontAwesomeIcon icon={faArrowDown} className={`arrow-icon ${selectedExperience === index ? 'rotated' : ''}`} />
            </div>
          ))}
        </div>
      ) : (
        <div className="horizontal-line">
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className={`experience-circle ${selectedExperience === index ? 'rotate' : ''}`}
              onClick={() => handleExperienceClick(index)}
            >
              <FontAwesomeIcon icon={faArrowDown} className={`arrow-icon ${selectedExperience === index ? 'rotated' : ''}`} />
            </div>
          ))}
        </div>
      )}
      <div className="experience-grid">
        {experienceData.map((experience, index) => (
          <div key={index} className="experience-item">
            <div className="experience-title" onClick={() => handleExperienceClick(index)}>
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
    </section>
  );
};

export default ExperienceSection;
