import { useEffect, useState } from "react";
import styles from './Footer.module.css';

function Footer() {

    const [usuarios, setUsuarios] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('/data/equipo.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información del equipo');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setUsuarios(datos);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            })
    }, []);

    if (cargando) {
        return <p>Cargando al equipo...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.contenedorFooter}>

                <div className={styles.bloqueEquipo}>
                    <h4 className={styles.tituloSeccion}>Nuestro Equipo</h4>
                    <div className={styles.miembrosEquipo}>
                        {usuarios.map((miembro) => (
                            <div key={miembro.id} className={styles.miembro}>
                                <img
                                    src={miembro.imagen}
                                    alt={miembro.nombre}
                                    className={styles.avatar}
                                />
                                <h5 className={styles.nombre}>{miembro.nombre}</h5>
                                <p className={styles.puesto}>{miembro.puesto}</p>
                                <span className={styles.email}>{miembro.email}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.bloqueRedes}>
                    <h4 className={styles.tituloSeccion}>Siguenos</h4>
                    <ul className={styles.listaRedes}>
                        <li>
                            <a href="https://x.com" target="_blank" rel="noreferrer">
                                📱 X (Twitter)
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                📘 Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                📸 Instagram
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}

export default Footer;