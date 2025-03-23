import React from 'react';
import styles from '../styles/landing.module.css';
import { FaCar, FaBuilding, FaBookOpen, FaLaptop } from 'react-icons/fa';

export default function Landing() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>SimplySwap: Compra y vende sin complicaciones</h1>
        <p>Intercambia productos de segunda mano de manera segura y rápida.</p>
        <button className={styles.button}>Empieza ahora</button>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <FaCar size={48} className={styles.icon} />
          <h2>Vehículos</h2>
          <p>Compra y vende coches, motos y más.</p>
        </div>
        <div className={styles.feature}>
          <FaBuilding size={48} className={styles.icon} />
          <h2>Propiedades</h2>
          <p>Encuentra casas, apartamentos y oficinas.</p>
        </div>
        <div className={styles.feature}>
          <FaBookOpen size={48} className={styles.icon} />
          <h2>Libros</h2>
          <p>Comparte conocimiento con libros usados.</p>
        </div>
        <div className={styles.feature}>
          <FaLaptop size={48} className={styles.icon} />
          <h2>Electrónica</h2>
          <p>Descubre gadgets, ordenadores y más.</p>
        </div>
      </section>
    </div>
  );
}
