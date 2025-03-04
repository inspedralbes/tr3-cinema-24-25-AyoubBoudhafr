// src/app/components/Navbar/Navbar.jsx
'use client';

import React from 'react';
import Link from 'next/link';  // Importa Link de Next.js
import './Navbar.css';

const Navbar = ({ busqueda, setBusqueda }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">simplySwap</h1>
      <input
        type="text"
        placeholder="Estic buscant..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="navbar-input"
      />
      <Link href="/login">
        <button className="navbar-button">Login</button>
      </Link>
    </nav>
  );
};

export default Navbar;
