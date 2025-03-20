'use client';

import { useState } from 'react';
import { login } from '../../services/comunicationManager';
import { useRouter } from 'next/navigation';
import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!username || !password) {
      setError('Both fields are required');
      return;
    }
    try {
      const response = await login({ username, password });
      if (response.success) {
        router.push('/');
      } else {
        setError(response.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred, please try again');
    }
  };
  const irRegister = () => {
    router.push('register');
  }
  return (
    <div className={styles['login-container']}>
      <div className={styles['login-box']}>
        <h1 className={styles['login-title']}>Login</h1>
        {error && <p className={styles['login-error']}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles['input-group']}>
            <label htmlFor="username">Email</label>
            <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              placeholder="introdueix l'email"
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
              placeholder="introdueix la contrasenya"
              required
            />
          </div>
          <button type="submit" className={styles['login-button']}>Log In</button>
          <button className={styles.irRegister} onClick={irRegister}>Registra't aquí</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
