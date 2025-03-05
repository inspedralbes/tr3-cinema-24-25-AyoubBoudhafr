import React from 'react';
import './Navbar2.css';

import { FaCar, FaBuilding, FaBookOpen, FaLaptop } from 'react-icons/fa';

const Navbar2 = () => {
  return (
    <nav className="navbar2">
      <div className="nav2-item">
        <FaCar className="nav2-icon" />
        <span>Motor</span>
      </div>
      <div className="nav2-item">
        <FaBuilding className="nav2-icon" />
        <span>Inmobiliaria</span>
      </div>
      <div className="nav2-item">
        <FaBookOpen className="nav2-icon" />
        <span>Formación y libros</span>
      </div>
      <div className="nav2-item">
        <FaLaptop className="nav2-icon" />
        <span>Tecnologia</span>
      </div>
    </nav>
  );
};

export default Navbar2;
