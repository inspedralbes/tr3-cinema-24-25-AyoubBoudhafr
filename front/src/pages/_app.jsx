
import React from 'react';
import '../styles/globals.css'; // Importa estilos globales
import Navbar from '../components/Navbar/Navbar'; // Ajusta las rutas si es necesario
import Navbar2 from '../components/Navbar2/Navbar2';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Component {...pageProps} />
    </>
  );
}
