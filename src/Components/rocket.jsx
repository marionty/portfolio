import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Rocket = () => {
  // État pour suivre si la fusée a été lancée ou non
  const [rocketStarted, setRocketStarted] = useState(false);
  
  // État pour suivre si le bouton est actif ou non
  const [buttonActive, setButtonActive] = useState(false);
  
  // Animation de la fusée utilisant react-spring
  const rocketAnimation = useSpring({
    from: { top: '100%' },
    to: { top: rocketStarted ? '-100%' : '100%' }, // Modifier cette ligne pour définir la position finale de la fusée
    config: { duration: 2000 },
  });

  // Fonction pour lancer la fusée
  const startRocket = () => {
    setRocketStarted(true);
    setButtonActive(true);
  };

  return (
    <div className="rocket-container">
      {/* Conteneur de la fusée */}
      <div id="rocket_dummy">
        {/* Corps de la fusée avec animation */}
        <animated.div className={`rocket_body${rocketStarted ? ' started' : ''}`} style={rocketStarted ? rocketAnimation : {}}></animated.div>
      </div>

      {/* Bouton de lancement de la fusée */}
      <button className={`rocket-button${buttonActive ? ' active' : ''}`}
        onClick={startRocket}
        onMouseUp={() => setButtonActive(false)}
      >
        <FontAwesomeIcon icon={faPlay} />
      </button>
    </div>
  );
};

export default Rocket;
