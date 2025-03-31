'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';  
import { useRouter } from 'next/navigation';
import { FaRegUser, FaRegHeart, FaRegCommentDots, FaPlusCircle } from 'react-icons/fa';

const Navbar = ({ busqueda, setBusqueda }) => {
  const router = useRouter();
  // const [categoria, setCategoria] = useState("");

  // useEffect(() => {
  //     const storedCategoria = localStorage.getItem('categoria') || "tecnologia";
  //     setCategoria(storedCategoria);
  // }, []);

  const toLanding = () => {
    router.push('/');
  };

  return (
    <nav className={styles.navbar}>
      <h1 className={styles['navbar-title']} onClick={toLanding}>SimplySwap</h1>
      <input
        type="text"
        placeholder="Estic buscant..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className={styles['navbar-input']}
      />
      <div className={styles['navbar-icons']}>
        <Link href="/likes">
          <FaRegHeart className={styles['navbar-icon']} />
        </Link>
        <Link href="/chats">
          <FaRegCommentDots className={styles['navbar-icon']} />
        </Link>
        <Link href="/perfil">
          <FaRegUser className={styles['navbar-icon']} />
        </Link>
        <Link href={`/tecnologia/crear`}>
          <FaPlusCircle className={styles['navbar-icon']} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
