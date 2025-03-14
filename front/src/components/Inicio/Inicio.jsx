import React from 'react';
import Producto from '../Tecnologia/Tecnologia_item/Producto';
import {getProductosTecnologicos} from '../../services/comunicationManager';

let productos = await getProductosTecnologicos();
const Inicio = ({ busqueda }) => {
  const productosFiltrados = (productos || []).filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', backgroundColor: '#f7f7f7' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          margin: '0 4rem'
        }}
      >
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((p) => <Producto key={p.id} {...p} />)
        ) : (
          <p style={{ fontSize: '18px', color: '#555' }}>No se encontraron productos</p>
        )}
      </div>
    </div>
  );
};

export default Inicio;
