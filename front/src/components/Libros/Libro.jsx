'use client';
import React, { useState, useEffect } from 'react';
import Libro from './Libro_item/Libro';
import { getLibros } from '../../services/comunicationManager';
import styles from './Libro.module.css';

const Libros = ({ busqueda }) => {
  const [libros, setLibros] = useState([]);
  const [paginaActual, setPaginaActual] = useState(0);
  const [hayMasPaginas, setHayMasPaginas] = useState(true);
  const [cargando, setCargando] = useState(false);
  const TAMANO_PAGINA = 1;

  useEffect(() => {
    const fetchLibros = async () => {
      setCargando(true);
      try {
        const nuevosLibros = await getLibros(paginaActual, TAMANO_PAGINA);
        setLibros(nuevosLibros);
        setHayMasPaginas(nuevosLibros.length === TAMANO_PAGINA);
      } catch (error) {
        console.error('Error cargando libros:', error);
      } finally {
        setCargando(false);
      }
    };
    fetchLibros();
  }, [paginaActual]);

  const librosFiltrados = libros.filter(libro =>
    libro.nombre?.toLowerCase().includes(busqueda?.toLowerCase() || '')
  );

  return (
    <div className={styles.contenedor}>
      <div className={styles.lista}>
        {librosFiltrados.map((libro) => (
          <Libro key={libro.id} {...libro} />
        ))}
      </div>

      <div className={styles.controles}>
        <button
          onClick={() => setPaginaActual(p => Math.max(0, p - 1))}
          disabled={paginaActual === 0 || cargando}
          className={styles.flecha}
        >
          ◀
        </button>

        <span className={styles.paginaActual}>Página {paginaActual + 1}</span>

        <button
          onClick={() => setPaginaActual(p => p + 1)}
          disabled={!hayMasPaginas || cargando}
          className={styles.flecha}
        >
          ▶
        </button>
      </div>

      {cargando && <div className={styles.cargando}>Cargando...</div>}
    </div>
  );
};

export default Libros;