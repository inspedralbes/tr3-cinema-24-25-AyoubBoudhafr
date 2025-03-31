import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getUnInmueble } from '../../services/comunicationManager';
import styles from '../../styles/Detalles.module.css';
import Chat from '../../components/Chat/Chat';

const InmuebleDetalles = () => {
  const router = useRouter();
  const { id } = router.query;
  const [inmueble, setInmueble] = useState(null);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(0);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchInmueble = async () => {
        try {
          const data = await getUnInmueble(id);
          setInmueble(data);
        } catch (error) {
          console.error('Error al obtener el inmueble:', error);
        }
      };

      fetchInmueble();
    }
  }, [id]);

  useEffect(() => {
    if(inmueble){
      setTimeout(() => {
        window.scrollTo({
          top: 100,
          behavior: 'smooth',
        });
      }, 0);
    }
    }, [inmueble]);

  if (!inmueble) {
    return <div>Cargando...</div>;
  }

  const cambiarImagen = (direccion) => {
    const totalImagenes = inmueble.imagenes.length;
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
            src={inmueble.imagenes[imagenSeleccionada]}
            alt={inmueble.descripcionShort}
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
          {inmueble.imagenes.map((img, index) => (
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
          <h3>{inmueble.usuario.nombre || 'Vendedor'}</h3>
        </div>
        <h1 className={styles.nombre}>{inmueble.descripcionShort}</h1>
        <p className={styles.descripcion}>{inmueble.descripcion}</p>
        <p className={styles.direccion}>{inmueble.direccion}</p>
        <p className={styles.ubicacion}>
          {inmueble.ciudad}, {inmueble.pais}
        </p>
        <p className={styles.fecha}>
          Publicat: {new Date(inmueble.fechaPublicacion).toLocaleDateString()}
        </p>
        <p className={styles.precio}>
          {inmueble.precio}
          {'\u20AC'}
        </p>
        <div className={styles.botonesAccion}>
        <button
            className={styles.botonChat}
            onClick={() => {
              const usuario = localStorage.getItem('usuario');
              if (!usuario) {
                alert('Necesitas iniciar sesión para usar el chat');
                return;
              }
              setShowChat(!showChat);
            }}
          >
            {showChat ? 'Cerrar Chat' : 'Abrir Chat'}
          </button>
        </div>
      </div>
      {showChat && <Chat productoId={id} onClose={() => setShowChat(false)} vendedor={inmueble.usuario.nombre} />}
    </div>
  );
};

export default InmuebleDetalles;
