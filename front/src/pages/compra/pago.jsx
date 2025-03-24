import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/pago.module.css';
import { compra } from '../../services/comunicationManager'
import { toast, Toaster } from 'react-hot-toast';
const Pago = () => {
    const router = useRouter();
    const [cardData, setCardData] = useState({
        number: '',
        expiry: '',
        cvc: ''
    });
    const showToast = (mensaje) => {
        toast.success(mensaje, {
          duration: 4000, // Duración en ms
          position: 'top-right', // Posición del toast
        });
      };
    const [errors, setErrors] = useState({});
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
            console.log(userData);
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
            console.log(response);
            localStorage.removeItem('userData');
            showToast('Pago exitoso!');
            router.push('/');
        }
    };

    return (
        <div className={styles.container}>
            <h1>Datos de Pago</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Número de Tarjeta</label>
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
                        <label>Expiración (MM/AA)</label>
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
                        Volver
                    </button>
                    <button type="submit" className={styles.submitButton}>
                        Pagar Ahora
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Pago;