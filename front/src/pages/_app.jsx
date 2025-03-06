
import React from 'react';
import '../styles/globals.css';
import Navbar from '../components/Navbar/Navbar';
import Navbar2 from '../components/Navbar2/Navbar2';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Navbar2/>
      <Component/>
    </>
  );
}
