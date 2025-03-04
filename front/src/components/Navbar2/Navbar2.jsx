import React from 'react';
import './Navbar2.css';

const Navbar2 = () => {
  return (
    <nav className="navbar2">
      <select className="navbar-select">
        <option value="moviles">Móviles</option>
        <option value="portatiles">Portátiles</option>
      </select>
      <select className="navbar-select">
        <option value="accesorios">Accesorios</option>
        <option value="tablets">Tablets</option>
      </select>
      <select className="navbar-select">
        <option value="audio">Audio</option>
        <option value="gaming">Gaming</option>
      </select>
    </nav>
  );
};

export default Navbar2;
