import { Link } from "react-router-dom";
import styles from './Header.module.css';

function Header() {

    return (
        <header>
            <h3>Tiendita</h3>
            <nav>
                <ul className={styles.navLinks}>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/carrito">Carrito</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;