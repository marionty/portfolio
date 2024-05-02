import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

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
            {exp.description.map((desc, i) => <p key={i}>{desc}</p>)}
          </div>
        )}
      </div>
    ))}
  </div>
  
  );
};

export default ExperienceSection;

/*import React, { useState } from 'react';
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

export default ExperienceSection;*/
