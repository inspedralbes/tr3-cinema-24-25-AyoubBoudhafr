'use client';
import React, { useEffect, useState } from 'react';
import Libro from './Libro_item/Libro';
import { getLibros } from '../../services/comunicationManager';
import styles from './Libro.module.css';

const Libros = ({ busqueda }) => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const cargarLibros = async () => {
      const datos = await getLibros();
      setLibros(datos);
    };
    cargarLibros();
  }, []);

  const librosFiltrados = libros.filter(libro =>
    libro.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    libro.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className={styles.contenedor}>
      {librosFiltrados.map((libro) => (
        <Libro key={libro.id} {...libro} />
      ))}
    </div>
  );
};

export default Libros;