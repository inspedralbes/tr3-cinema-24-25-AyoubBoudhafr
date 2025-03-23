import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/formulario.module.css';

const formularioPago = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userData.name.trim()) newErrors.name = 'Nombre requerido';
    if (!emailRegex.test(userData.email)) newErrors.email = 'Email inválido';
    if (!userData.address.trim()) newErrors.address = 'Dirección requerida';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem('userData', JSON.stringify(userData));
      router.push('/compra/pago');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Datos Personales</h1>
      <form onSubmit={handleContinue} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Nombre Completo</label>
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            className={errors.name ? styles.error : ''}
          />
          {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            className={errors.email ? styles.error : ''}
          />
          {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
        </div>

        <div className={styles.formGroup}>
          <label>Dirección de Envío</label>
          <input
            type="text"
            value={userData.address}
            onChange={(e) => setUserData({ ...userData, address: e.target.value })}
            className={errors.address ? styles.error : ''}
          />
          {errors.address && <span className={styles.errorMsg}>{errors.address}</span>}
        </div>

        <button type="submit" className={styles.button}>
          Continuar al Pago
        </button>
      </form>
    </div>
  );
};

export default formularioPago;