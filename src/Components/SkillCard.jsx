
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/Styles.css";

const SkillCard = ({ icon, title, type, description, hasNotions }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`skill-card ${isFlipped ? "flipped" : ""}`} onMouseEnter={handleCardFlip} onMouseLeave={handleCardFlip}>
      <div className="card-content front">
        <FontAwesomeIcon icon={icon} className="icon" />
        <h4>{title}</h4>
        <h5>{type}</h5>
        {hasNotions && (
          <p className="notions-text">Notions</p>
        )}
      </div>
      <div className="card-content back">
        <p>{description}</p>
        
      </div>
    </div>
  );
};

export default SkillCard;
