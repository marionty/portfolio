
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./Pages/Skill";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import NavTemplate from "./Components/NavTemplate";
import "./App.css";
import Cursor from "./Components/Cursor";
import { useState } from "react";
import ScrollToTopOnPageChange from './Components/ScrollToTopOnPageChange';
import UIUXDesigner from './Pages/UIUXDesigner';
import WebDevelopment from './Pages/WebDevelopment';
import MobileDevelopment from './Pages/MobileDevelopment';

const App = () => {
  const [scaling, setscaling] = useState(false);
  return (
    
    <main>
      

      <BrowserRouter>
      <ScrollToTopOnPageChange />
      <Cursor scaling={scaling}/>
        <Routes>
       
          <Route path="/" element={<NavTemplate />}>
        
            <Route exact path="/" element={<Home />} />
           
            <Route exact path="/Skills" element={<Skills  />} />
            
            <Route path="Portfolio/ui-ux-designer" element={<UIUXDesigner />} />
            <Route path="Portfolio/web-development" element={<WebDevelopment />} />
            <Route path="Portfolio/mobile-development" element={<MobileDevelopment />} />

            <Route exact path="/Contact" element={<Contact />} />
            
          </Route>
        </Routes>
        
      </BrowserRouter>
      
    </main>
  );
}

export default App;
