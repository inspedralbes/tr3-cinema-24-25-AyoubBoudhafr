import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {getUnaTecnologia} from '../../services/comunicationManager'

const TecnologiaDetalles = () => {
  const router = useRouter();
  const { id } = router.query;
  const [tecnologia, setTecnologia] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchTecnologia = async () => {
        try {
          const data = await getUnaTecnologia(id);
          setTecnologia(data);
        } catch (error) {
          console.error('Error al obtener el inmueble:', error);
        }
      };

      fetchTecnologia();
    }
  }, [id]); 

  if (!tecnologia) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      hola
    </div>
  );
};

export default TecnologiaDetalles;
