'use client';
import React from 'react';
import styles from './Navbar2.module.css';  // Importación correcta de CSS Module
import { FaCar, FaBuilding, FaBookOpen, FaLaptop } from 'react-icons/fa';
import Link from 'next/link';

const Navbar2 = () => {
  return (
    <nav className={styles.navbar2}>
      <div className={styles['nav2-item']}>
        <FaCar className={styles['nav2-icon']} />
        <span>Motor</span>
      </div>
      <div className={styles['nav2-item']}>
        <FaBuilding className={styles['nav2-icon']} />
        <span>Inmobiliaria</span>
      </div>
      <div className={styles['nav2-item']}>
        <FaBookOpen className={styles['nav2-icon']} />
        <span>Formación y libros</span>
      </div>
      <div className={styles['nav2-item']}>
      <Link href="/tecnologia">
        <FaLaptop className={styles['nav2-icon']} />
      </Link>
        <span>Tecnología</span>
      </div>
    </nav>
  );
};

export default Navbar2;
