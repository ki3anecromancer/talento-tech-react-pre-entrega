import styles from "./Inicio.module.css";

function Inicio() {
    return (
        <div className={styles.contenedorInicio}>
            <div className={styles.bloqueBienvenida}>
                <h1 className={styles.titulo}>Tienda Pre-Entrega Talento Tech</h1>
                <p className={styles.alumno}>Alumno: Ian Acuña</p>
            </div>
        </div>
    );
}

export default Inicio;