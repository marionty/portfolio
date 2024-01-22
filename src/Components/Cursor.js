import { useEffect, useState } from "react";
import "../Styles/Cursor.css";
import { motion } from 'framer-motion';

const Cursor = ({ scaling }) => {
  const [largecircle, setLargecircle] = useState({ x: 0, y: 0 });
  const [smallcircle, setSmallcircle] = useState({ x: 0, y: 0 });
  const [smallCircleColor, setSmallCircleColor] = useState("aqua");

  const getRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  useEffect(() => {
    const handleMousemove = (e) => {
      setLargecircle({ x: e.clientX, y: e.clientY });
      setSmallcircle({ x: e.clientX, y: e.clientY });
    };

    const intervalId = setInterval(() => {
      setSmallCircleColor(getRandomColor());
    }, 3000);

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (!isMobile) {
      window.addEventListener("mousemove", handleMousemove);
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener("mousemove", handleMousemove);
      }
      clearInterval(intervalId);
    };
  }, []);

  // Rendu conditionnel en fonction de la largeur de l'écran
  return (
    <div>
      {!window.matchMedia("(max-width: 768px)").matches && (
        <>
          <motion.div
            animate={{ x: largecircle.x - 32, y: largecircle.y - 32, scale: scaling ? 0.1 : 1 }}
            className="large_circle"
          ></motion.div>
          <motion.div
            animate={{ x: smallcircle.x - 8, y: smallcircle.y - 8, backgroundColor: smallCircleColor }}
            className="small_circle"
          ></motion.div>
        </>
      )}
    </div>
  );
};

export default Cursor;
