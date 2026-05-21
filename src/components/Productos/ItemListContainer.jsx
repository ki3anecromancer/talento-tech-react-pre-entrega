import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import styles from "./Tienda.module.css";

function ItemListContainer({ mensaje }) {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);
    
    const [paginaActual, setPaginaActual] = useState(1);
    const productosPorPagina = 5;

    useEffect(() => {
        fetch('/data/productos.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la lista de items');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setProductos(datos);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            })
    }, []);

    if (cargando) {
        return <p className={styles.estado}>Cargando productos...</p>;
    }

    if (error) {
        return <p className={styles.estado}>Error: {error}</p>;
    }

    const ultimoIndice = paginaActual * productosPorPagina;
    const primerIndice = ultimoIndice - productosPorPagina;
    const productosFiltrados = productos.slice(primerIndice, ultimoIndice);
    const totalPaginas = Math.ceil(productos.length / productosPorPagina);

    return (
        <div className={styles.contenedorTienda}>
            <h2 className={styles.tituloMensaje}>{mensaje}</h2>
            
            <ItemList productos={productosFiltrados} />

            <div className={styles.paginacion}>
                <button 
                    onClick={() => setPaginaActual(paginaActual - 1)} 
                    disabled={paginaActual === 1}
                    className={styles.botonPagina}
                >
                    Anterior
                </button>
                <span className={styles.infoPagina}>
                    Página {paginaActual} de {totalPaginas}
                </span>
                <button 
                    onClick={() => setPaginaActual(paginaActual + 1)} 
                    disabled={paginaActual === totalPaginas}
                    className={styles.botonPagina}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
}

export default ItemListContainer;