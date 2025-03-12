'use client';
import React from 'react';
import styles from './Navbar2.module.css';  
import { FaCar, FaBuilding, FaBookOpen, FaLaptop } from 'react-icons/fa';
import Link from 'next/link';

const Navbar2 = () => {
  return (
    <nav className={styles.navbar2}>
      <div className={styles['nav2-item']}>
        <Link href="/motor">
          <FaCar className={styles['nav2-icon']} />
        </Link>
        <Link href="/motor">
          <span>Motor</span>
        </Link>
      </div>
      <div className={styles['nav2-item']}>
        <Link href="/inmobiliaria">
          <FaBuilding className={styles['nav2-icon']} />
        </Link>
        <Link href="/inmobiliaria">
          <span>Inmobiliaria</span>
        </Link>
      </div>
      <div className={styles['nav2-item']}>
        <Link href="/libro">
          <FaBookOpen className={styles['nav2-icon']} />
        </Link>
        <Link href="/libro">
          <span>Formación y libros</span>
        </Link>
      </div>
      <div className={styles['nav2-item']}>
        <Link href="/tecnologia">
          <FaLaptop className={styles['nav2-icon']} />
        </Link>
        <Link href="/tecnologia">
          <span>Tecnología</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar2;
