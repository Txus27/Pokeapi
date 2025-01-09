import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactDetail from './components/ContactDetail';
import PokemonDetail from './components/PokemonDetail';  // Página de detalle de Pokémon
import 'bootstrap/dist/css/bootstrap.min.css';  // Para los estilos
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Para las dependencias de JavaScript

const App = () => {
  return (
    <Router>
      <Header/>
      <Navbar /> {/* Barra de navegación con el menú desplegable */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Body page="home" />} />
          <Route path="/gen1" element={<Body page="gen1" />} />
          <Route path="/gen2" element={<Body page="gen2" />} />
          <Route path="/digimon" element={<Body page="digimon" />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} /> {/* Ruta para los detalles del Pokémon */}
          <Route path="/contact/:name" element={<ContactDetail />} /> {/* Ruta dinámica para los contactos */}
        </Routes>
      </div>

      <Footer /> {/* Pie de página */}
    </Router>
  );
};

export default App;
