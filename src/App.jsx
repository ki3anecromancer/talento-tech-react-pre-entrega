import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Inicio from "./pages/Inicio/Inicio";
import Productos from "./pages/Productos/Productos";
import Carrito from "./pages/Carrito/Carrito";
import ProductoDetalle from "./pages/ProductoDetalle/ProductoDetalle";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Inicio />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/producto/:id" element={<ProductoDetalle />} />
                <Route path="/carrito" element={<Carrito />} />
            </Route>
        </Routes>
    );
}

export default App;