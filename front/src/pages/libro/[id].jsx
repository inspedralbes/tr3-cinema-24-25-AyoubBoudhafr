import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getUnLibro } from '../../services/comunicationManager';
import styles from '../../styles/Detalles.module.css';

const LibroDetalles = () => {
  const router = useRouter();
  const { id } = router.query;
  const [libro, setLibro] = useState(null);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(0);

  useEffect(() => {
    if (id) {
      const fetchLibro = async () => {
        try {
          const data = await getUnLibro(id);
          console.log('datos LibroDetalles', data);
          setLibro(data);
        } catch (error) {
          console.error('Error al obtener el libro:', error);
        }
      };

      fetchLibro();
    }
  }, [id]);

  useEffect(() => {
    if(libro){
      setTimeout(() => {
        window.scrollTo({
          top: 100,
          behavior: 'smooth',
        });
        }, 0);
      }
    }, [libro]);

  if (!libro) {
    return <div>Cargando...</div>;
  }

  const irPago = () => {
    router.push('/compra/pago')
  }

  const cambiarImagen = (direccion) => {
    const totalImagenes = libro.imagenes.length;
    setImagenSeleccionada((prev) =>
      direccion === 'next'
        ? (prev + 1) % totalImagenes
        : (prev - 1 + totalImagenes) % totalImagenes
    );
  };

  return (
    <div className={styles.productoDetalle}>
      <div className={styles.galeria}>
        <div className={styles.imagenContainer}>
          <img
            src={libro.imagenes[imagenSeleccionada]}
            alt={libro.nombre}
            className={styles.imagenPrincipal}
          />
          <button
            className={`${styles.botonImagen} ${styles.left}`}
            onClick={() => cambiarImagen('prev')}
          >
            <svg viewBox="0 0 24 24">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
            </svg>
          </button>
          <button
            className={`${styles.botonImagen} ${styles.right}`}
            onClick={() => cambiarImagen('next')}
          >
            <svg viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </button>
        </div>
        <div className={styles.miniaturas}>
          {libro.imagenes.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Miniatura ${index + 1}`}
              className={`${styles.miniatura} ${
                index === imagenSeleccionada ? styles.activa : ''
              }`}
              onClick={() => setImagenSeleccionada(index)}
            />
          ))}
        </div>
      </div>

      <div className={styles.informacion}>
        <div className={styles.vendedor}>
          <svg className={styles.persona} viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <h3>{libro.usuario.nombre || 'Vendedor'}</h3>
        </div>
        <h1 className={styles.nombre}>{libro.nombre}</h1>
        <p className={styles.autor}>Autor: {libro.autor}</p>
        <p className={styles.descripcion}>{libro.descripcion}</p>
        <p className={styles.fecha}>
          Publicado: {new Date(libro.fechaPublicacion).toLocaleDateString()}
        </p>
        <p className={styles.precio}>
          {libro.precio}
          {'\u20AC'}
        </p>
        <div className={styles.botonesAccion}>
          <button className={styles.botonComprar} onClick={irPago}>
            Comprar
          </button>
          <button className={styles.botonChat}>
            Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default LibroDetalles;
