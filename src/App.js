
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./Pages/Skill";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import NavTemplate from "./Components/NavTemplate";
import "./App.css";
import Cursor from "./Components/Cursor";
import { useState } from "react";

const App = () => {
  const [scaling, setscaling] = useState(false);
  return (
    
    <main>
      <div><Cursor scaling={scaling}/></div>

      <BrowserRouter>
        <Routes>
       
          <Route path="/" element={<NavTemplate />}>
            {/* Route principale pour le NavTemplate */}
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
