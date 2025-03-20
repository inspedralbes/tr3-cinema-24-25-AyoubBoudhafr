import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} SimplySwap. Todos los derechos reservados.</p>
        <nav>
          <ul className={styles.footerNav}>
            <li><a href="/privacy">Política de Privacidad</a></li>
            <li><a href="/terms">Términos de Uso</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
