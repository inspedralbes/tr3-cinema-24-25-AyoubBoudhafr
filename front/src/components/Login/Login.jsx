'use client';

import { useState, useEffect } from 'react';
import { login } from '../../services/comunicationManager';
import { useRouter } from 'next/navigation';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
  }, [showSuccessAlert]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (!email || !password) {
      setError('Ambos campos son obligatorios');
      return;
    }

    try {
      const response = await login({ email, password });
      
      if (response.success) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('usuario', JSON.stringify(response.user));
        setShowSuccessAlert(true);
      } else {
        setError(response.message || 'Credenciales inválidas');
      }
    } catch (err) {
      setError('Error en el servidor, intente nuevamente');
    }
  };

  const irRegister = () => {
    router.push('register');
  }

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
            <h2 className={styles.alertTitle}>Login Exitos</h2>
          </div>
        </div>
      )}

      <div className={styles['login-box']}>
        <h1 className={styles['login-title']}>Login</h1>
        
        {error && (
          <div className={styles.errorAlert}>
            <div className={styles.errorIcon}>!</div>
            <p className={styles.errorText}>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className={styles['input-group']}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          
          <div className={styles['input-group']}>
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
            />
          </div>
          
          <button type="submit" className={styles['login-button']}>Ingresar</button>
          <button type="button" className={styles.irRegister} onClick={irRegister}>
            Registrate aquí
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;