'use client';
import React, { useState, useEffect } from 'react';
import Motor from './Motor_item/Motor';
import { getMotor } from '../../services/comunicationManager';
import styles from './Motor.module.css';

const Motores = ({ busqueda }) => {
  const [motores, setMotores] = useState([]);
  const [paginaActual, setPaginaActual] = useState(0);
  const [hayMasPaginas, setHayMasPaginas] = useState(true);
  const [cargando, setCargando] = useState(false);
  const TAMANO_PAGINA = 1;

  useEffect(() => {
    const fetchMotores = async () => {
      setCargando(true);
      try {
        const nuevosMotores = await getMotor(paginaActual, TAMANO_PAGINA);
        setMotores(nuevosMotores);
        setHayMasPaginas(nuevosMotores.length === TAMANO_PAGINA);
      } catch (error) {
        console.error('Error cargando motores:', error);
      } finally {
        setCargando(false);
      }
    };
    fetchMotores();
  }, [paginaActual]);

  const motoresFiltrados = motores.filter(motor =>
    motor.marca?.toLowerCase().includes(busqueda?.toLowerCase() || '')
  );

  return (
    <div className={styles.contenedor}>
      <div className={styles.lista}>
        {motoresFiltrados.map((motor) => (
          <Motor key={motor.id} {...motor} />
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

export default Motores;