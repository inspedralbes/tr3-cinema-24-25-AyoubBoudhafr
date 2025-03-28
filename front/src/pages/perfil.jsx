import React, { useEffect, useState } from 'react';
import { fetchUsuario } from '../services/comunicationManager';
import styles from '../styles/perfil.module.css';
import { useRouter } from 'next/router';

const Perfil = () => {
    const [usuario, setUsuario] = useState(null);
    const [showLogoutAlert, setShowLogoutAlert] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if(showLogoutAlert) {
            const timer = setTimeout(() => {
                router.push('/');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showLogoutAlert, router]);

    useEffect(() => {
        const fetchData = async () => {
            const storedUser = JSON.parse(localStorage.getItem('usuario'));
            const token = localStorage.getItem('token');

            if (storedUser?.id && token) {
                try {
                    const response = await fetchUsuario(storedUser.id, token);
                    if(response?.email) {
                        setUsuario(response);
                    } else {
                        router.push('/login');
                    }
                } catch (error) {
                    router.push('/login');
                }
            } else {
                router.push('/login');
            }
        };

        fetchData();
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        setShowLogoutAlert(true);
    };

    return (
        <div className={styles.container}>
            {showLogoutAlert && (
                <div className={styles.customAlert}>
                    <div className={styles.alertContent}>
                        <div className={styles.checkmark}>
                            <svg className={styles.checkmarkIcon} viewBox="0 0 52 52">
                                <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none"/>
                                <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                        </div>
                        <h2 className={styles.alertTitle}>Sessió tancada correctament</h2>
                    </div>
                </div>
            )}

            {usuario ? (
                <>
                    <div className={styles.header}>
                        <div className={styles.avatar}>
                            {usuario.nombre.charAt(0).toUpperCase()}
                        </div>
                    </div>
                    <h2>{usuario.nombre}</h2>
                    <div className={styles.info}>
                        <p className={styles.infoItem}>
                            <strong>Correu electrònic:</strong> {usuario.email}
                        </p>
                        <p className={styles.infoItem}>
                            <strong>Telèfon:</strong> {usuario.telefono}
                        </p>
                        {usuario.ciudad && (
                            <p className={styles.infoItem}>
                                <strong>Ciudad:</strong> {usuario.ciudad}
                            </p>
                        )}
                        {usuario.pais && (
                            <p className={styles.infoItem}>
                                <strong>Ciutat:</strong> {usuario.pais}
                            </p>
                        )}
                    </div>
                    <button 
                        className={styles.logoutButton} 
                        onClick={handleLogout}
                        aria-label="Cerrar sesión"
                    >
                        Tancar sessió
                    </button>
                </>
            ) : (
                <p className={styles.loading}>Carregant informació...</p>
            )}
        </div>
    );
};

export default Perfil;