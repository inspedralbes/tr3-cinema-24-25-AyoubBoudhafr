import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from '../../styles/crear.module.css';
import { crearTecnologia, /*uploadImage*/ } from '../../services/comunicationManager';

const CrearTecnologiaForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        precio: 0,
        categoria: 1,
        descripcion: '',
        envioDisponible: false,
        imagenes: [],
        fechaPublicacion: new Date().toISOString(),
        usuario: { id: 1 }
    });

    const [isUploading, setIsUploading] = useState(false);
    const [mensaje, setMensaje] = useState({ texto: '', tipo: '' });

    const onDrop = useCallback(async (acceptedFiles) => {
        setIsUploading(true);
        try {
            const uploadedImages = await Promise.all(
                acceptedFiles.map(async (file) => {
                    //const response = await uploadImage(file);
                    //return `/public/assets/${response.filename}`;
                })
            );
            
            setFormData(prev => ({
                ...prev,
                imagenes: [...prev.imagenes, ...uploadedImages]
            }));
            setMensaje({ texto: 'Imágenes subidas correctamente', tipo: 'success' });
        } catch (error) {
            setMensaje({ texto: 'Error subiendo imágenes', tipo: 'error' });
        }
        setIsUploading(false);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {'image/*': ['.jpeg', '.png', '.jpg', '.gif']},
        multiple: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const producto = {
                ...formData,
                precio: parseFloat(formData.precio),
                categoria: parseInt(formData.categoria)
            };
            
            const response = await crearTecnologia(producto);
            
            if (response) {
                setMensaje({ texto: 'Producto creado exitosamente!', tipo: 'success' });
                setFormData({
                    nombre: '',
                    precio: 0,
                    categoria: 1,
                    descripcion: '',
                    envioDisponible: false,
                    imagenes: [],
                    fechaPublicacion: new Date().toISOString(),
                    usuario: { id: 1 }
                });
            }
        } catch (error) {
            setMensaje({ texto: 'Error al crear el producto', tipo: 'error' });
        }
    };

    return (
        <div className={styles.formContainer}>
            <h2>Crear Producto Tecnológico</h2>
            <form onSubmit={handleSubmit} className={styles.techForm}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Nombre del Producto:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Precio:</label>
                    <input
                        type="number"
                        name="precio"
                        value={formData.precio}
                        onChange={handleChange}
                        className={styles.input}
                        step="0.01"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Categoría:</label>
                    <select
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        className={styles.select}
                    >
                        <option value={1}>Computadoras</option>
                        <option value={2}>Teléfonos</option>
                        <option value={3}>Electrónica</option>
                        <option value={4}>Accesorios</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Descripción:</label>
                    <textarea
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        className={styles.textarea}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>
                        <input
                            type="checkbox"
                            name="envioDisponible"
                            checked={formData.envioDisponible}
                            onChange={handleChange}
                        />
                        Envío Disponible
                    </label>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Imágenes:</label>
                    <div
                        {...getRootProps()}
                        className={`${styles.dropzone} ${isDragActive ? styles.dropzoneActive : ''}`}
                    >
                        <input {...getInputProps()} />
                        {isUploading ? 'Subiendo...' : 'Arrastra imágenes o haz clic aquí'}
                    </div>
                    <div className={styles.imagenesList}>
                        {formData.imagenes.map((img, index) => (
                            <img
                                key={index}
                                src={img.replace('/public', '')}
                                alt="Preview"
                                className={styles.previewImage}
                            />
                        ))}
                    </div>
                </div>

                <button type="submit" className={styles.submitButton}>
                    Crear Producto
                </button>
            </form>

            {mensaje.texto && (
                <div className={`${styles.mensaje} ${mensaje.tipo === 'success' ? styles.mensajeSuccess : styles.mensajeError}`}>
                    {mensaje.texto}
                </div>
            )}
        </div>
    );
};

export default CrearTecnologiaForm;