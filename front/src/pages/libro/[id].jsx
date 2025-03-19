import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {getUnLibro} from '../../services/comunicationManager'
import styles from '../../styles/LibroDetalles.module.css'

const LibroDetalles = () => {
  const router = useRouter();
  const { id } = router.query;
  const [libro, setLibro] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchLibro = async () => {
        try {
          const data = await getUnLibro(id);
          console.log('datos LibroDetalles',data);
          setLibro(data);
        } catch (error) {
          console.error('Error al obtener el libro: ', error);
        }
      };

      fetchLibro();
    }
  }, [id]); 

  if (!libro) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{libro.nombre}</h1>
    </div>
  );
};

export default LibroDetalles;
