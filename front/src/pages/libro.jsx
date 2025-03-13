import React, { useState } from 'react';
import Libro from '../components/Libros/Libro';

export default function MotorPage(){
  const [busqueda, setBusqueda] = useState('');

  return <Libro busqueda={busqueda} setBusqueda={setBusqueda} />;
}