'use client';
import React, { useState } from 'react';
import styles from './Motor.module.css';
import { useRouter } from 'next/router';

const Motor = ({
  id,
  marca,
  modelo,
  precio,
  kilometraje,
  descripcion,
  imagenes
}) => {
  const router = useRouter();
  const [imagenIndex, setImagenIndex] = useState(0);
  
  const siguienteImagen = () => {
    setImagenIndex(prev => (prev < imagenes.length - 1 ? prev + 1 : 0));
  };

  const anteriorImagen = () => {
    setImagenIndex(prev => (prev > 0 ? prev - 1 : imagenes.length - 1));
  };
  const handleClick = () => {
    router.push(`/motor/${id}`);
  };
  return (
    <div className={styles.motor} onClick={handleClick}>
      <div className={styles['imagen-container']}>
        <img
          src={imagenes[imagenIndex]}
          alt={`${marca} ${modelo}`}
          className={styles['imagen-motor']}
        />

        <button onClick={anteriorImagen} className={`${styles['boton-imagen']} ${styles.left}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M16 4l-8 8 8 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button onClick={siguienteImagen} className={`${styles['boton-imagen']} ${styles.right}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M8 4l8 8-8 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className={styles.contenido}>
        <div className={styles.header}>
          <h2 className={styles.titulo}>{marca} {modelo}</h2>
          <h3 className={styles.precio}>{precio}{'\u20AC'}</h3>
        </div>

        <div className={styles.detalles}>
          <div className={styles.metaInfo}>
            <span className={styles.kilometraje}>
              <svg className={styles.icono} viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/>
              </svg>
              {kilometraje} km
            </span>
          </div>

          <p className={styles.descripcion}>{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default Motor;