import React, { useState } from 'react';
import Tecnologia from '../../components/Tecnologia/Tecnologia';

export default function TecnologiaPage() {
  const [busqueda, setBusqueda] = useState('');

  return <Tecnologia busqueda={busqueda} setBusqueda={setBusqueda} />;
}
