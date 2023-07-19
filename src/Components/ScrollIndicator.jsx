import { useEffect } from "react";

export default function ScrollIndicator() {
  useEffect(() => {
    // Fonction pour gérer le défilement de la page
    function handleScroll() {
      const scrollIndicator = document.getElementById("scroll-indicator");
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      // Vérifier si la position de défilement atteint la fin de la page
      if (scrollPosition >= documentHeight) {
        scrollIndicator.style.display = "none"; // Masquer l'indicateur de défilement
      } else {
        scrollIndicator.style.display = "block"; // Afficher l'indicateur de défilement
      }
    }

    // Ajouter un écouteur d'événement pour le défilement de la fenêtre
    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="scroll-indicator" className="scroll-indicator">
      <div className="arrow"></div>
    </div>
  );
}
