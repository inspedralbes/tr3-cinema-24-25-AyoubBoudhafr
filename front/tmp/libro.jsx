import React, { useState } from 'react';
import Libro from '../src/components/Libros/Libro';

export default function LibroPage(){
  const [busqueda, setBusqueda] = useState('');
  return <Libro busqueda={busqueda} setBusqueda={setBusqueda} />;
}