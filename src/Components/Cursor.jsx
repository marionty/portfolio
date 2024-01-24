import { useEffect, useState } from "react";
import "../Styles/Styles.css";
import { motion } from 'framer-motion';

const Cursor = ({ scaling }) => {
  const [largecircle, setLargecircle] = useState({ x: 0, y: 0 });
  const [smallCircleColor, setSmallCircleColor] = useState("aqua");
  const offset = 50; // Ajustez le décalage selon vos préférences

  const getRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  useEffect(() => {
    const handleMousemove = (e) => {
      setLargecircle({ x: e.clientX - offset, y: e.clientY - offset });
    };

    const intervalId = setInterval(() => {
      setSmallCircleColor(getRandomColor());
    }, 3000);

    window.addEventListener("mousemove", handleMousemove);

    return () => {
      window.removeEventListener("mousemove", handleMousemove);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {!window.matchMedia("(max-width: 768px)").matches && (
        <>
          <motion.div
            animate={{
              x: largecircle.x - 32,
              y: largecircle.y - 32,
              scale: scaling ? 0.1 : 1
            }}
            className="large_circle"
          ></motion.div>
          <motion.div
            animate={{
              x: largecircle.x - 8,
              y: largecircle.y - 8,
              backgroundColor: smallCircleColor
            }}
            className="small_circle"
          ></motion.div>
        </>
      )}
    </div>
  );
};

export default Cursor