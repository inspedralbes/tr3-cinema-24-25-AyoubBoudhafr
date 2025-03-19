import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {getUnInmueble} from '../../services/comunicationManager'
import styles from '../../styles/InmuebleDetalles.module.css'

const InmuebleDetalles = () => {
  const router = useRouter();
  const { id } = router.query;
  const [inmueble, setInmueble] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchInmueble = async () => {
        try {
          const data = await getUnInmueble(id);
          console.log('datos inmuebledetalls',data);
          setInmueble(data);
        } catch (error) {
          console.error('Error al obtener el inmueble:', error);
        }
      };

      fetchInmueble();
    }
  }, [id]); 

  if (!inmueble) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{inmueble.descripcionShort}</h1>
      <p>{inmueble.descripcion}</p>
      <p>{inmueble.direccion}</p>
      <p>{inmueble.ciudad}, {inmueble.pais}</p>
      <img src={inmueble.imagenes[0]} alt='imagen inmueble'></img>
      <p>{inmueble.precio}{'\u20AC'}</p>
    </div>
  );
};

export default InmuebleDetalles;
