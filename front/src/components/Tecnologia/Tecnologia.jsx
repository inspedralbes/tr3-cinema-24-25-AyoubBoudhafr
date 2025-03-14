import React, { useState, useEffect } from 'react';
import Producto from './Tecnologia_item/Producto';
import { getProductosTecnologicos } from '../../services/comunicationManager';
const Tecnologia = ({ busqueda }) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {

    const fetchProductos = async () => {
      const productosObtenidos = await getProductosTecnologicos();
      setProductos(productosObtenidos);
    };

    fetchProductos();
  }, []);
  const productosFiltrados = productos.filter((p) =>
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

export default Tecnologia;
