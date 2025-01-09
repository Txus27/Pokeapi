import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success"> 
    {
    /*
      Para cambiar el color de fondo hay que seleccionar entre:
      bg-primary: Para un fondo azul (más común para botones y barras principales).
      bg-success: Para un fondo verde.
      bg-info: Para un fondo azul claro.
      bg-warning: Para un fondo amarillo.
      bg-danger: Para un fondo rojo.
      bg-secondary: Para un fondo gris.
    */
    }
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gen1">Generación 1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gen2">Generación 2</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/digimon">Digimons</Link>
            </li>
            <li className="nav-item dropdown">
              {/* Dropdown con el enlace para los contactos */}
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Contacto
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/contact/juan-luis">Juan Luis</Link></li>
                <li><Link className="dropdown-item" to="/contact/pedro">Pedro</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
