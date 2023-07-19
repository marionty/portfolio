
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./Pages/Skill";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Gabarit from "./Components/Gabarit";
import "./App.css";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gabarit />}>
            {/* Route principale pour le Gabarit */}
            <Route exact path="/" element={<Home />} />
            {/* Route pour la page d'accueil */}
            <Route exact path="/Skills" element={<Skills />} />
            {/* Route pour la page de compétences */}
            <Route exact path="/Portfolio" element={<Portfolio />} />
            {/* Route pour la page de portfolio */}
            <Route exact path="/Contact" element={<Contact />} />
            {/* Route pour la page de contact */}
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
