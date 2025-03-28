'use client';
import React, { useState } from 'react';
import styles from './Libro.module.css';
import { useRouter } from 'next/router';

const Libro = ({
  id,
  nombre,
  precio,
  descripcion,
  imagenes,
  entregaDisponible,
  fechaPublicacion,
  autor,
  paginas,
  idioma
}) => {
  const router = useRouter();
  const [imagenIndex, setImagenIndex] = useState(0);
  const añoPublicacion = new Date(fechaPublicacion).getFullYear();
  const [mostrarMas, setMostrarMas] = useState(false);
  const toggleDescripcion = () => {
    setMostrarMas(!mostrarMas);
  };

  const siguienteImagen = () => {
    setImagenIndex((prev) => (prev < imagenes.length - 1 ? prev + 1 : 0));
  };

  const anteriorImagen = () => {
    setImagenIndex((prev) => (prev > 0 ? prev - 1 : imagenes.length - 1));
  };
  const handleClick = () => {
    router.push(`/libro/${id}`);
  };
  return (
    <div className={styles.producto} onClick={handleClick}>
      <div className={styles['imagen-container']}>
        <img
          src={imagenes[imagenIndex]}
          alt={nombre}
          className={styles['imagen-producto']}
        />
        {imagenes.length == 0 ? (
          imagenes.length > 1 && (
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
          )
        ) : (
          <h2> No hi ha imatge</h2>
        )}
      </div>

      <div className={styles.contenido}>
        <h2 className={styles.precio}>{precio}{'\u20AC'}</h2>
        <p className={styles.nombre}>{nombre}</p>
        <p className={styles.autor}>per {autor}</p>

        <div className={styles.descripcionContainer}>
          {descripcion != null ? (
            <>
              <p className={`${styles.descripcion} ${mostrarMas ? styles.descripcionCompleta : ''}`}>
                {descripcion}
              </p>
              {descripcion.length > 100 && (
                <button onClick={toggleDescripcion} className={styles.botonDescripcion}>
                  {mostrarMas ? 'Mostrar menos' : 'Mostrar más'}
                </button>
              )}
            </>
          ) : (
            <p>No hi ha descripció</p>
          )
          }
        </div>

        <div className={styles.metaInfo}>
          <div className={styles.metaItem}>
            <svg className={styles.metaIcono} viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
            </svg>
            <span>{añoPublicacion}</span>
          </div>

          <div className={styles.metaItem}>
            <svg className={styles.metaIcono} viewBox="0 0 24 24">
              <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
            </svg>
            <span>{paginas} pàgines</span>
          </div>

          <div className={styles.metaItem}>
            <svg className={styles.metaIcono} viewBox="0 0 24 24">
              <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
            </svg>
            <span>{idioma}</span>
          </div>
        </div>

        <div className={styles['envio-info']}>
          {entregaDisponible ? (
            <span className={styles.disponible}>
              <svg className={styles.envioIcono} viewBox="0 0 24 24">
                <path d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm1.5-9H17V12h4.46L19.5 9.5zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4h3zM3 6v9h.76c.55-.61 1.35-1 2.24-1 .89 0 1.69.39 2.24 1H15V6H3z" />
              </svg>
              Enviament disponible
            </span>
          ) : (
            <span className={styles.enPersona}>
              <svg className={styles.envioIcono} viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
              </svg>
              Lliurament només en persona
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Libro;