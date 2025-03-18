import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {getUnInmueble} from '../../services/comunicationManager'

const InmuebleDetalles = () => {
  const router = useRouter();
  const { id } = router.query;
  const [inmueble, setInmueble] = useState(null);

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

  if (!inmueble) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{inmueble.descripcionShort}</h1>
      <p>{inmueble.descripcion}</p>
      <p>{inmueble.direccion}</p>
      <p>{inmueble.ciudad}, {inmueble.pais}</p>
    </div>
  );
};

export default InmuebleDetalles;
