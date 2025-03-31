import React, { useState } from 'react';
import Inmobiliaria from '../../components/Inmobiliaria/Inmobiliaria';

export default function InmueblesPage(){
  const [busqueda, setBusqueda] = useState('');

  return <Inmobiliaria busqueda={busqueda} setBusqueda={setBusqueda} />;
}