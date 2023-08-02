import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsFillAirplaneFill, BsImages } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import Gallery from './components/Gallery/Gallery.js';
import Home from './components/Home/Home.js';
import China from './components/Journeys/China';
import Egito from './components/Journeys/Egito';
import Journeys from './components/Journeys/Journeys.js';
import Mexico from './components/Journeys/Mexico.js';
//css
import './App.css';
import './components/style/Parallax.css';
import './components/style/Reset.css';
import './components/style/Responsive.css';

const App = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <Router>
      <nav>
        <div onClick={handleMobileMenuToggle}>
          {window.innerWidth < 768 && <p>Menu</p>}
        </div>
        <ul className={`menu${showMobileMenu ? 'Show' : ''}`}>
          <li>
            <Link
              onClick={window.innerWidth < 768 && handleMobileMenuToggle}
              to="/"
            >
              <AiFillHome />
              Inicio
            </Link>
          </li>
          <li>
            <Link
              onClick={window.innerWidth < 768 && handleMobileMenuToggle}
              to="/journeys"
            >
              <BsFillAirplaneFill />
              Diarios de Viagens
            </Link>
          </li>
          <li>
            <Link
              onClick={window.innerWidth < 768 && handleMobileMenuToggle}
              to="/gallery"
            >
              <BsImages />
              Galeria de Imagens
            </Link>
          </li>
          <li>
            <Link
              onClick={window.innerWidth < 768 && handleMobileMenuToggle}
              to="/contact"
            >
              <IoMdContact />
              Contato
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/journeys" element={<Journeys />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/journeys/egito" element={<Egito />} />
        <Route path="/journeys/china" element={<China />} />
        <Route path="/journeys/mexico" element={<Mexico />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
