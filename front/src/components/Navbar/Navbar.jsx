'use client';
import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';  
import { FaRegUser, FaRegHeart, FaRegCommentDots, FaPlusCircle } from 'react-icons/fa';

const Navbar = ({ busqueda, setBusqueda }) => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles['navbar-title']}>SimplySwap</h1>
      <input
        type="text"
        placeholder="Estic buscant..."
        value={busqueda}
        // onChange={(e) => setBusqueda(e.target.value)}
        className={styles['navbar-input']}
      />
      <div className={styles['navbar-icons']}>
        <Link href="/likes">
          <FaRegHeart className={styles['navbar-icon']} />
        </Link>
        <Link href="/chats">
          <FaRegCommentDots className={styles['navbar-icon']} />
        </Link>
        <Link href="/login">
          <FaRegUser className={styles['navbar-icon']} />
        </Link>
        <Link href="/vendre">
          <FaPlusCircle className={styles['navbar-icon']} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
