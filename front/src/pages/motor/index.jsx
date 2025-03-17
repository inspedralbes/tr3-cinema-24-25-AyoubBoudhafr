import React, { useState } from 'react';
import Motor from '../../components/Motor/Motor';

export default function MotorPage(){
  const [busqueda, setBusqueda] = useState('');

  return <Motor busqueda={busqueda} setBusqueda={setBusqueda} />;
}