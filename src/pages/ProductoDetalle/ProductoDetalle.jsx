import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductoDetalle.module.css";

const ProductoDetalle = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        fetch('/data/productos.json')
            .then(response => response.json())
            .then(data => {
                const productoEncontrado = data.find(p => p.id === parseInt(id));
                setProducto(productoEncontrado);
            })
            .catch(error => console.error("Error al cargar el producto:", error));
    }, [id]);

    if (!producto) {
        return <h2 className={styles.estado}>Cargando detalle del producto...</h2>;
    }

    const incrementar = () => {
        if (cantidad < producto.stock) {
            setCantidad(cantidad + 1);
        }
    };

    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const agregarAlCarrito = () => {
        alert(`Agregaste ${cantidad}x "${producto.nombre}" al carrito.`);
    };

    return (
        <div className={styles.contenedorDetalle}>
            <div className={styles.columnaImagen}>
                <img src={producto.imagen} alt={producto.nombre} className={styles.imagen} />
            </div>

            <div className={styles.columnaInfo}>
                <span className={styles.categoria}>Detalle del Producto</span>
                <h2 className={styles.nombre}>{producto.nombre}</h2>
                <h3 className={styles.precio}>${producto.precio.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</h3>
                <p className={styles.descripcion}>{producto.descripcion}</p>
                <p className={styles.stock}>Unidades disponibles: {producto.stock}</p>

                {producto.stock > 0 ? (
                    <div className={styles.accionesCompra}>
                        <div className={styles.controlCantidad}>
                            <button
                                onClick={decrementar}
                                className={styles.botonContador}
                                disabled={cantidad <= 1}
                            >
                                -
                            </button>
                            <span className={styles.numeroCantidad}>{cantidad}</span>
                            <button
                                onClick={incrementar}
                                className={styles.botonContador}
                                disabled={cantidad >= producto.stock}
                            >
                                +
                            </button>
                        </div>

                        <button onClick={agregarAlCarrito} className={styles.botonAgregar}>
                            Agregar al carrito
                        </button>
                    </div>
                ) : (
                    <p className={styles.sinStock}>Producto agotado</p>
                )}
            </div>
        </div>
    );
}

export default ProductoDetalle;