import Item from "./Item";
import styles from "./Tienda.module.css";

function ItemList({ productos }) {
    return (
        <div className={styles.listaProductos}>
            {productos.map(producto => (
                <Item key={producto.id} {...producto} />
            ))}
        </div>
    );
}

export default ItemList;