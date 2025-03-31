'use client';
import React, { useState, useEffect } from 'react';
import Inmueble from './Inmueble_item/Inmueble';
import { getInmuebles } from '../../services/comunicationManager';
import styles from './Inmobiliaria.module.css';

const Inmuebles = ({ busqueda }) => {
  const [inmuebles, setInmuebles] = useState([]);
  const [paginaActual, setPaginaActual] = useState(0);
  const [hayMasPaginas, setHayMasPaginas] = useState(true);
  const [cargando, setCargando] = useState(false);
  const TAMANO_PAGINA = 5;

  useEffect(() => {
    localStorage.setItem('categoria', 'inmobiliaria');
    const fetchInmuebles = async () => {
      setCargando(true);
      try {
        const nuevosInmuebles = await getInmuebles(paginaActual, TAMANO_PAGINA);
        setInmuebles(nuevosInmuebles);
        setHayMasPaginas(nuevosInmuebles.length === TAMANO_PAGINA);
      } catch (error) {
        console.error('Error cargando inmuebles:', error);
      } finally {
        setCargando(false);
      }
    };
    fetchInmuebles();
  }, [paginaActual]);

  const inmueblesFiltrados = inmuebles.filter(
    (i) => i.descripcionShort?.toLowerCase().includes(busqueda?.toLowerCase() || '')
  );

  return (
    <div className={styles.contenedor}>
      <div className={styles.lista}>
        {inmueblesFiltrados.map((inmueble) => (
          <Inmueble key={inmueble.id} {...inmueble} />
        ))}
      </div>

      <div className={styles.controles}>
        <button
          onClick={() => setPaginaActual((p) => Math.max(0, p - 1))}
          disabled={paginaActual === 0 || cargando}
          className={styles.flecha}
        >
          {'\u25C0'}
        </button>

        <span className={styles.paginaActual}>Página {paginaActual + 1}</span>

        <button
          onClick={() => setPaginaActual((p) => p + 1)}
          disabled={!hayMasPaginas || cargando}
          className={styles.flecha}
        >
          {'\u25B6'}
        </button>
      </div>

      {cargando && <div className={styles.cargando}>Carregant...</div>}
    </div>
  );
};

export default Inmuebles;
