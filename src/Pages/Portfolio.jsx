import "../Styles/Styles.css";
import React from 'react';
import { Outlet } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>Veuillez sélectionner une catégorie ci-dessous :</p>
      <Outlet />
    </div>
  );
};

export default Portfolio;
