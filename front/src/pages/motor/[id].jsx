import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getMotor } from '../../services/comunicationManager'
import styles from '../../styles/MotorDetalles.module.css'

const MotorDetalles = () => {
    const router = useRouter();
    const { id } = router.query;
    const [motor, setMotor] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchMotor = async () => {
                try {
                    const data = await getMotor(id);
                    console.log('datos MotorDetalles',data);
                    setMotor(data);
                } catch (error) {
                    console.error('Error al obtener el motor:', error);
                }
            };
            fetchMotor();
        }
    }, [id]);

    if (!motor) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <p>{motor.precio}</p>
        </div>
    );
};

export default MotorDetalles;
