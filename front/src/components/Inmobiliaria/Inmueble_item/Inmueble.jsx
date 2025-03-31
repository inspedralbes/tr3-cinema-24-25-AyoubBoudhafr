'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Inmueble.module.css';

const Inmueble = ({
  id,
  descripcionShort,
  descripcion,
  direccion,
  ciudad,
  pais,
  imagenes
}) => {
  const router = useRouter()
  const [imagenIndex, setImagenIndex] = useState(0);

  const siguienteImagen = (e) => {
    e.stopPropagation();
    setImagenIndex((prev) => (prev < imagenes.length - 1 ? prev + 1 : 0));
  };

  const anteriorImagen = (e) => {
    e.stopPropagation();
    setImagenIndex((prev) => (prev > 0 ? prev - 1 : imagenes.length - 1));
  };
  const handleClick = () => {
    router.push(`/inmobiliaria/${id}`);
  };

  return (
    <div className={styles.inmueble} onClick={handleClick}>
      <div className={styles['imagen-container']}>
        <img
          src={imagenes[imagenIndex]}
          alt={descripcionShort}
          className={styles['imagen-inmueble']}
        />
        
        {imagenes.length > 1 && (
          <>
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
          </>
        )}
      </div>

      <div className={styles.detalles}>
        <h2 className={styles.titulo}>{descripcionShort}</h2>
        <p className={styles.direccion}>{direccion}</p>
        <div className={styles.ubicacion}>
          <span className={styles.ciudad}>{ciudad}</span>, 
          <span className={styles.pais}>{pais}</span>
        </div>
        <p className={styles.descripcion}>{descripcion}</p>
      </div>
    </div>
  );
};

export default Inmueble;