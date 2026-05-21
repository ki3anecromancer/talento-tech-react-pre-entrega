import { Link } from "react-router-dom";
import styles from "./Tienda.module.css";

function Item({ id, nombre, precio, stock, imagen }) {
    return (
        <Link to={`/producto/${id}`} className={styles.enlaceTarjeta}>
            <div className={styles.tarjetaHorizontal}>
                <div className={styles.contenedorImagen}>
                    <img src={imagen} alt={nombre} className={styles.imagenProducto} />
                </div>
                <div className={styles.infoProducto}>
                    <h3 className={styles.nombre}>{nombre}</h3>
                    <p className={styles.precio}>${precio.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>
                    <p className={styles.stock}>Disponibles: {stock}</p>
                </div>
            </div>
        </Link>
    );
}

export default Item;