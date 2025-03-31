import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/landing.module.css';
import { FaCar, FaBuilding, FaBookOpen, FaLaptop } from 'react-icons/fa';

export default function Landing() {
  const router = useRouter();

  const handleButtonClick = () => {
    if (localStorage.getItem('usuario')) {
      router.push('/tecnologia/crear');
    } else {
      router.push('/register');
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>SimplySwap: Compra i ven sense complicacions</h1>
        <p>Intercanvia productes de segona mà de manera segura i ràpida.</p>
        <button 
          className={styles.button}
          onClick={handleButtonClick}
        >
          Comença ara
        </button>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <FaCar size={48} className={styles.icon} />
          <h2>Vehicles</h2>
          <p>Compra i ven cotxes, motos i més.</p>
        </div>
        <div className={styles.feature}>
          <FaBuilding size={48} className={styles.icon} />
          <h2>Propietats</h2>
          <p>Troba cases, apartaments i oficines.</p>
        </div>
        <div className={styles.feature}>
          <FaBookOpen size={48} className={styles.icon} />
          <h2>Llibres</h2>
          <p>Comparteix coneixement amb llibres usats.</p>
        </div>
        <div className={styles.feature}>
          <FaLaptop size={48} className={styles.icon} />
          <h2>Electrònica</h2>
          <p>Descobreix gadgets, ordinadors i més.</p>
        </div>
      </section>
    </div>
  );
}