'use client';
import React, { useEffect, useState } from 'react';
import Motor from './Motor_item/Motor';
import { getMotor } from '../../services/comunicationManager';
import styles from './Motor.module.css';

const Motores = ({ busqueda }) => {
  const [motores, setMotores] = useState([]);

  useEffect(() => {
    const cargarMotores = async () => {
      const datos = await getMotor();
      setMotores(datos);
    };
    cargarMotores();
  }, []);

  const motoresFiltrados = motores.filter(motor =>
    motor.marca.toLowerCase().includes(busqueda.toLowerCase()) ||
    motor.modelo.toLowerCase().includes(busqueda.toLowerCase()) ||
    motor.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className={styles.contenedor}>
      {motoresFiltrados.length > 0 ? (
        motoresFiltrados.map((motor) => (
          <Motor key={motor.id} {...motor} />
        ))
      ) : (
        <p className={styles.sinResultados}>🚗 No se encontraron vehículos</p>
      )}
    </div>
  );
};

export default Motores;