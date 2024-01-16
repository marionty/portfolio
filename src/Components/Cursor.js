import { useEffect, useState } from "react";
import "../Styles/Cursor.css";
import { motion } from 'framer-motion';

const Cursor = ({ scaling }) => {
  const [largecircle, setLargecircle] = useState({ x: 0, y: 0 });
  const [smallcircle, setSmallcircle] = useState({ x: 0, y: 0 });
  const [smallCircleColor, setSmallCircleColor] = useState("aqua");

  const getRandomColor = () => {
    // Génère une couleur hexadécimale aléatoire
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  useEffect(() => {
    const mousemove = (e) => {
      setLargecircle({ x: e.clientX, y: e.clientY });
      setSmallcircle({ x: e.clientX, y: e.clientY });
    };

    const intervalId = setInterval(() => {
      // Change la couleur du petit cercle à intervalles réguliers
      setSmallCircleColor(getRandomColor());
    }, 3000); // Change la couleur toutes les 3 secondes (ajustez selon vos préférences)

    window.addEventListener("mousemove", mousemove);

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => {
      window.removeEventListener("mousemove", mousemove);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <motion.div
        animate={{ x: largecircle.x - 32, y: largecircle.y - 32, scale: scaling ? 0.1 : 1 }}
        className="large_circle"
      ></motion.div>
      <motion.div
        animate={{ x: smallcircle.x - 8, y: smallcircle.y - 8, backgroundColor: smallCircleColor }}
        className="small_circle"
      ></motion.div>
    </div>
  );
};

export default Cursor;
