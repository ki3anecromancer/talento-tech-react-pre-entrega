import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className={styles.pantallaCompleta}>
            <Header />
            <main className={styles.contenidoPrincipal}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;