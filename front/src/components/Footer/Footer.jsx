import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} SimplySwap. Tots els drets reservats.</p>
        <nav>
          <ul className={styles.footerNav}>
            <li><a href="/privacy">Política de Privadesa</a></li>
            <li><a href="/terms">Termes d'ús</a></li>
            <li><a href="/contact">Contacte</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
