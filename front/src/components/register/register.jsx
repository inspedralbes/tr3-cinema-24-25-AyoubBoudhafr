'use client';

import { useState } from 'react';
import { register, login } from '../../services/comunicationManager';
import { useRouter } from 'next/navigation';
import styles from './Register.module.css';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();
  let credencialesRegister = {};
  let credencialesLogin = {};
  const handleSubmit = async (e) => {
    credencialesRegister = {
      "nombre": nombre,
      "email": email,
      "password": password,
      "telefono": telefono
    }
    credencialesLogin = {
      "email": email,
      "password": password
    }
    console.log('credencialesRegister', credencialesRegister);

    e.preventDefault();
    setError(null);
    try {
      const response = await register(credencialesRegister);
      console.log('respuesta de back', response);

      if (response.exito) {
        try {
          const responseLogin = await login(credencialesLogin);
          console.log('data login', responseLogin);
          if (responseLogin.success) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('usuario', response.user);
            let token = localStorage.getItem('token');
            router.push('/');
          } else {
            setError(response.message || 'Invalid credentials');
          }
        } catch (error) {
          console.error('Error al hacer login', e);
        }
      } else {
        setError(response.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Error al hacer register', error);
      setError('Error al hacer register');

    }
  };
  return (
    <div className={styles['login-container']}>
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
