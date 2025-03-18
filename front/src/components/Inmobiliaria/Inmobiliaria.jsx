'use client';
import React from 'react';
import Inmueble from './Inmueble_item/Inmueble';
import { getInmuebles } from '../../services/comunicationManager';
import styles from './Inmobiliaria.module.css';

const Inmuebles = ({ busqueda }) => {
  const [inmuebles, setInmuebles] = React.useState([]);

  React.useEffect(() => {
    const cargarInmuebles = async () => {
      const datos = await getInmuebles();
      setInmuebles(datos);
    };
    cargarInmuebles();
  }, []);

  const inmueblesFiltrados = inmuebles.filter(
    (i) => i.descripcionShort.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className={styles.contenedor}>
      {inmueblesFiltrados.length > 0 ? (
        inmueblesFiltrados.map((inmueble) => (
          <Inmueble key={inmueble.id} {...inmueble} />
        ))
      ) : (
        <p className={styles.sinResultados}>No se encontraron inmuebles</p>
      )}
    </div>
  );
};

export default Inmuebles;