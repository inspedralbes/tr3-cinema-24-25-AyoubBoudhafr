import React, { useState, useEffect } from 'react';
import Producto from './Tecnologia_item/Producto';
import { getProductosTecnologicos } from '../../services/comunicationManager';
import styles from './Tecnologia.module.css';

const Tecnologia = ({ busqueda }) => {
  const [productos, setProductos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(0);
  const [hayMasPaginas, setHayMasPaginas] = useState(true);
  const [cargando, setCargando] = useState(false);
  const TAMANO_PAGINA = 10; 

  useEffect(() => {
    localStorage.setItem('categoria', 'tecnologia');
    const fetchProductos = async () => {
      setCargando(true);
      try {
        const nuevosProductos = await getProductosTecnologicos(paginaActual, TAMANO_PAGINA);
        
        setProductos(nuevosProductos);
        
        setHayMasPaginas(nuevosProductos.length === TAMANO_PAGINA);
        
      } catch (error) {
        console.error('Error cargando productos:', error);
      } finally {
        setCargando(false);
      }
    };

    fetchProductos();
  }, [paginaActual]);

  const productosFiltrados = productos.filter((p) => 
    p.nombre?.toLowerCase().includes(busqueda?.toLowerCase() || '')
  );

  return (
    <div className={styles.contenedor}>
      <div className={styles.lista}>
        {productosFiltrados.map((p) => (
          <Producto key={p.id} {...p} />
        ))}
      </div>

      <div className={styles.controles}>
        <button
          onClick={() => setPaginaActual(p => Math.max(0, p - 1))}
          disabled={paginaActual === 0 || cargando}
          className={styles.flecha}
        >
          {'\u25C0'}
        </button>

        <span className={styles.paginaActual}>
          Página {paginaActual + 1}
        </span>

        <button
          onClick={() => setPaginaActual(p => p + 1)}
          disabled={!hayMasPaginas || cargando}
          className={styles.flecha}
        >
          {'\u25B6'}
        </button>
      </div>

      {cargando && <div className={styles.cargando}>Cargando...</div>}
    </div>
  );
};

export default Tecnologia;