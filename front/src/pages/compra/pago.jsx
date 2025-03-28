import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/pago.module.css';
import { compra } from '../../services/comunicationManager'

const Pago = () => {
    const router = useRouter();
    const [cardData, setCardData] = useState({
        number: '',
        expiry: '',
        cvc: ''
    });
    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('usuario') == null){
            router.push('/')
        }
        const savedData = localStorage.getItem('userData');
        if (!savedData){
            router.push('/compra/formulario');
        }
        const savedUser = localStorage.getItem('usuario');
        if(!savedUser){
            router.push('/')
        }
    }, []);

    useEffect(() => {
        if(showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
                router.push('/');
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [showAlert]);

    const validateCard = () => {
        const newErrors = {};
        if (!/^\d{16}$/.test(cardData.number)) newErrors.number = 'Tarjeta inválida';
        if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(cardData.expiry)) newErrors.expiry = 'Formato MM/AA';
        if (!/^\d{3}$/.test(cardData.cvc)) newErrors.cvc = 'CVC inválido';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateCard()) {
            const userData = JSON.parse(localStorage.getItem('userData'));
            const usuarioActual = JSON.parse(localStorage.getItem('usuario'));
            const producto = JSON.parse(localStorage.getItem('producto'));
            const categoriaCompra = localStorage.getItem('categoria');
            const datosCompra = {
                "nombre": producto.nombre,
                "precioPagado": producto.precio,
                "categoria": categoriaCompra,
                "estado": "Preparando pedido",
                "producto_id": producto.id,
                "compradorId": usuarioActual.id,
            }
            const response = await compra(datosCompra);
            localStorage.removeItem('userData');
            setShowAlert(true);
        }
    };

    return (
        <div className={styles.container}>
            {showAlert && (
                <div className={styles.customAlert}>
                    <div className={styles.alertContent}>
                        <div className={styles.checkmark}>
                            <svg className={styles.checkmarkIcon} viewBox="0 0 52 52">
                                <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none"/>
                                <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                        </div>
                        <h2 className={styles.alertTitle}>Pagament Completat</h2>
                    </div>
                </div>
            )}
            
            <h1>Dades de pagament</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Número de Targeta</label>
                    <input
                        type="text"
                        value={cardData.number}
                        onChange={(e) => setCardData({ ...cardData, number: e.target.value.replace(/\D/g, '') })}
                        maxLength={16}
                        className={errors.number ? styles.error : ''}
                    />
                    {errors.number && <span className={styles.errorMsg}>{errors.number}</span>}
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label>Expiració (MM/AA)</label>
                        <input
                            type="text"
                            value={cardData.expiry}
                            onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                            placeholder="MM/AA"
                            className={errors.expiry ? styles.error : ''}
                        />
                        {errors.expiry && <span className={styles.errorMsg}>{errors.expiry}</span>}
                    </div>

                    <div className={styles.formGroup}>
                        <label>CVC</label>
                        <input
                            type="text"
                            value={cardData.cvc}
                            onChange={(e) => setCardData({ ...cardData, cvc: e.target.value.replace(/\D/g, '') })}
                            maxLength={3}
                            className={errors.cvc ? styles.error : ''}
                        />
                        {errors.cvc && <span className={styles.errorMsg}>{errors.cvc}</span>}
                    </div>
                </div>

                <div className={styles.buttonGroup}>
                    <button type="button" className={styles.backButton} onClick={() => router.push('/compra/formulario')}>
                        Tornar
                    </button>
                    <button type="submit" className={styles.submitButton}>
                        Pagar Ara
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Pago;