'use client';

import { useState, useEffect } from 'react';
import { register, login } from '../../services/comunicationManager';
import { useRouter } from 'next/navigation';
import styles from './Register.module.css';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if(showSuccessAlert) {
      const timer = setTimeout(() => {
        router.push('/');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessAlert, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const credencialesRegister = {
      nombre: nombre,
      email: email,
      password: password,
      telefono: telefono
    };

    try {
      const response = await register(credencialesRegister);
      const responseLogin = await login({ email, password });

      localStorage.setItem('token', responseLogin.token);
      localStorage.setItem('usuario', JSON.stringify(responseLogin.user));
      setShowSuccessAlert(true);
      
    } catch (error) {
      console.error('Error al hacer register', error);
      setError('Error al hacer register');
    }
  };

  return (
    <div className={styles['login-container']}>
      {showSuccessAlert && (
        <div className={styles.customAlert}>
          <div className={styles.alertContent}>
            <div className={styles.checkmark}>
              <svg className={styles.checkmarkIcon} viewBox="0 0 52 52">
                <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none"/>
                <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
            </div>
            <h2 className={styles.alertTitle}>Registre Exitos</h2>
          </div>
        </div>
      )}

      <div className={styles['login-box']}>
        <h1 className={styles['login-title']}>Register</h1>
        {error && <p className={styles['login-error']}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles['input-group']}>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id='nombre'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder='*Nom'
            />
          </div>
          <div className={styles['input-group']}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="*Email"
              required
            />
          </div>
          <div className={styles['input-group']}>
            <label htmlFor="password">Contrasenya</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*Contrasenya"
              required
            />
          </div>
          <div className={styles['input-group']}>
            <label htmlFor="telefon">Telèfon</label>
            <input
              type="telefono"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Num. Telèfon"
            />
          </div>
          <button type="submit" className={styles['login-button']}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;