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

  const handleMouseEnter = () => {
    // Change la couleur du petit cercle lorsque la souris entre
    setSmallCircleColor(getRandomColor());
  };

  useEffect(() => {
    const mousemove = (e) => {
      setLargecircle({ x: e.clientX, y: e.clientY });
      setSmallcircle({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <div>
      <motion.div
        animate={{ x: largecircle.x - 32, y: largecircle.y - 32, scale: scaling ? 0.1 : 1 }}
        className="large_circle"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: smallCircleColor }}
        animate={{ x: smallcircle.x - 8, y: smallcircle.y - 8 }}
        onMouseEnter={handleMouseEnter}
        className="small_circle"
      ></motion.div>
    </div>
  );
};

export default Cursor;
