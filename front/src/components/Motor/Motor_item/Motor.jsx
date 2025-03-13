'use client';
import React, { useState } from 'react';
import styles from './Motor.module.css';

const Motor = ({
  marca,
  modelo,
  precio,
  kilometraje,
  descripcion,
  imagenes,
  envioDisponible
}) => {
  const [imagenIndex, setImagenIndex] = useState(0);

  const siguienteImagen = () => {
    setImagenIndex(prev => (prev < imagenes.length - 1 ? prev + 1 : 0));
  };

  const anteriorImagen = () => {
    setImagenIndex(prev => (prev > 0 ? prev - 1 : imagenes.length - 1));
  };

  return (
    <div className={styles.motor}>
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
          <h3 className={styles.precio}>{precio.toLocaleString('es-ES')}€</h3>
        </div>

        <div className={styles.detalles}>
          <div className={styles.metaInfo}>
            <span className={styles.kilometraje}>
              <svg className={styles.icono} viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/>
              </svg>
              {kilometraje.toLocaleString('es-ES')} km
            </span>
          </div>

          <p className={styles.descripcion}>{descripcion}</p>

          <div className={styles['envio-info']}>
            {envioDisponible ? (
              <span className={styles.disponible}>
                <svg className={styles.icono} viewBox="0 0 24 24">
                  <path d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm1.5-9H17V12h4.46L19.5 9.5zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4h3zM3 6v9h.76c.55-.61 1.35-1 2.24-1 .89 0 1.69.39 2.24 1H15V6H3z"/>
                </svg>
                Envío disponible
              </span>
            ) : (
              <span className={styles.enConcesionario}>
                <svg className={styles.icono} viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/>
                </svg>
                Recogida en concesionario
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motor;