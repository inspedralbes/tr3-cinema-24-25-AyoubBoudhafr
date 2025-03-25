import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getUnaTecnologia } from '../../services/comunicationManager';
import styles from '../../styles/Detalles.module.css';
import Chat from '../../components/Chat/Chat';

const TecnologiaDetalles = () => {
  const router = useRouter();
  const { id } = router.query;
  const [tecnologia, setTecnologia] = useState(null);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(0);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchTecnologia = async () => {
        try {
          const data = await getUnaTecnologia(id);
          setTecnologia(data);
        } catch (error) {
          console.error('Error al obtener el producto:', error);
        }
      };
      fetchTecnologia();
    }
  }, [id]);

  useEffect(() => {
    if (tecnologia) {
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  }, [tecnologia]);

  const irPago = () => {
    const savedUser = localStorage.getItem('usuario');
    if (!savedUser) {
      alert('Necesitas iniciar sesión para comprar');
    } else {
      localStorage.setItem('categoria', "tecnologia");
      localStorage.setItem('producto', JSON.stringify(tecnologia));
      router.push('/compra/formulario');
    }
  };

  const cambiarImagen = (direccion) => {
    const totalImagenes = tecnologia.imagenes.length;
    setImagenSeleccionada(prev =>
      direccion === 'next' ? (prev + 1) % totalImagenes : (prev - 1 + totalImagenes) % totalImagenes
    );
  };

  if (!tecnologia) {
    return <div className={styles.loading}>Cargando...</div>;
  }

  return (
    <div className={styles.productoDetalle}>
      <div className={styles.galeria}>
        <div className={styles.imagenContainer}>
          <img
            src={tecnologia.imagenes[imagenSeleccionada]}
            alt={tecnologia.nombre}
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
          {tecnologia.imagenes.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Miniatura ${index + 1}`}
              className={`${styles.miniatura} ${index === imagenSeleccionada ? styles.activa : ''}`}
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
          <h3>{tecnologia.usuario.nombre || 'Miguel M.'}</h3>
        </div>

        <h1 className={styles.nombre}>{tecnologia.nombre}</h1>
        <p className={styles.precio}>{tecnologia.precio} €</p>
        <p className={styles.descripcion}>{tecnologia.descripcion}</p>
        <p className={styles.fecha}>
          Publicado: {new Date(tecnologia.fechaPublicacion).toLocaleDateString()}
        </p>

        <div className={styles.botonesAccion}>
          <button className={styles.botonComprar} onClick={irPago}>
            Comprar
          </button>
          <button className={styles.botonChat} onClick={() => setShowChat(!showChat)}>
            {showChat ? 'Cerrar Chat' : 'Abrir Chat'}
          </button>
        </div>
      </div>

      {showChat && <Chat productoId={id} onClose={() => setShowChat(false) } vendedor={tecnologia.usuario.nombre} />}
    </div>
  );
};

export default TecnologiaDetalles;