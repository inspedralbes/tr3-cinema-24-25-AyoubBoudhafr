'use client';
import React, { useState } from 'react';
import './Producto.css';

const Producto = ({ nombre, precio, descripcion, imagenes, envioDisponible }) => {
  console.log('Envio disponible', envioDisponible);

  const [imagenIndex, setImagenIndex] = useState(0);

  const siguienteImagen = () => {
    if (imagenIndex < imagenes.length - 1) {
      setImagenIndex(imagenIndex + 1);
    } else {
      setImagenIndex(0);
    }
  };

  const anteriorImagen = () => {
    if (imagenIndex > 0) {
      setImagenIndex(imagenIndex - 1); 
    } else {
      setImagenIndex(imagenes.length - 1); 
    }
  };
  

  return (
    <div className="producto">
      <div className="imagen-container">
        <img
          src={imagenes[imagenIndex]}
          alt={nombre}
          className="imagen-producto"
        />

        <button onClick={anteriorImagen} className="boton-imagen left">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M16 4l-8 8 8 8" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <button onClick={siguienteImagen} className="boton-imagen right">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M8 4l8 8-8 8" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      <h2>{precio}€</h2>
      <p>{nombre}</p>

      <div className="envio-info">
        {envioDisponible === true ? (
          <>
            <span className="disponible">Envío disponible</span>
          </>
        ) : envioDisponible === false ? (
          <>
            <span className="enPersona">Entrega solo en persona</span>
          </>
        ) : (
          <span>Estado de envío no disponible</span>
        )}
      </div>
    </div>
  );
};

export default Producto;
