'use client';

import React from 'react';
import Link from 'next/link';
import { FaRegUser, FaRegHeart, FaRegCommentDots, FaPlusCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ busqueda, setBusqueda }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">SimplySwap</h1>
      <input
        type="text"
        placeholder="Estic buscant..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="navbar-input"
      />
      <div className="navbar-icons">
        <Link href="/likes">
          <FaRegHeart className="navbar-icon" />
        </Link>
        <Link href="/chats">
          <FaRegCommentDots className="navbar-icon" />
        </Link>
        <Link href="/login">
          <FaRegUser className="navbar-icon" />
        </Link>
        <Link href="/vendre">
          <FaPlusCircle className="navbar-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;