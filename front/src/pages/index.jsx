// src/pages/index.jsx
import React, { useState } from 'react';
import Inicio from '../components/Inicio/Inicio';

export default function Home() {
  const [busqueda, setBusqueda] = useState('');

  return <Inicio busqueda={busqueda} setBusqueda={setBusqueda} />;
}
