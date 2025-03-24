import React, { useEffect, useState } from 'react';
import { fetchUsuario } from '../services/comunicationManager';
import styles from '../styles/perfil.module.css';
import { useRouter } from 'next/router';

const Perfil = () => {
    const [usuario, setUsuario] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const storedUser = JSON.parse(localStorage.getItem('usuario'));
            const token = localStorage.getItem('token');

            if (storedUser && storedUser.id && token) {
                const response = await fetchUsuario(storedUser.id, token);
                console.log(' Dades de l\'usuari rebudes:', response);
                setUsuario(response);

                if (!response.email) {
                    router.push('/login');
                }
            } else {
                router.push('/login');
            }
        };

        fetchData();
    }, []);

    const handleLogout = () => {
        console.log(' Tancant sessió...');
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        router.push('/');
    };

    return (
        <div className={styles.container}>
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
                                <strong>Ciutat:</strong> {usuario.ciudad}
                            </p>
                        )}
                        {usuario.pais && (
                            <p className={styles.infoItem}>
                                <strong>País:</strong> {usuario.pais}
                            </p>
                        )}
                    </div>
                    <button className={styles.logoutButton} onClick={handleLogout}>
                        Tancar sessió
                    </button>
                </>
            ) : (
                <p>Carregant informació...</p>
            )}
        </div>
    );
};

export default Perfil;
