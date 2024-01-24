import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopOnPageChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Utilisez window.scrollTo pour définir la position de défilement en haut
    window.scrollTo(0, 0);
  }, [pathname]); // Effect sera réexécuté chaque fois que le chemin change

  return null; // Vous pouvez retourner n'importe quoi ou rien ici
}

export default ScrollToTopOnPageChange;
