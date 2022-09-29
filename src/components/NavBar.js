import React from 'react';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './styles/NavBar.css';

const NavBar = ({ background }) => {

  const brand =
    'https://thecolor.blog/wp-content/uploads/2021/11/logo-jordan-rojo-1024x576.png';
    
  return (
    <header className={`header background--${background}`}>
      
      <div className="header-container">
        
        {/* Botón de menú  */}
        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="white"/>
          <span>Menu</span>
        </div>

        {/* links de navegación */}
        <nav>
          <ul className="nav-container">
            <li>
              <a href="../App.js">Inicio</a>
            </li>
            <li>
              <a href="../pages/store.js">Tienda</a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>
        </nav>

        {/* logo de la marca */}
        <div className="logo-container">
          <img src={brand} alt="logo" />
        </div>

        {/* cart widget */}
        <CartWidget/>
      </div>
    </header>
  );
};

export default NavBar;
