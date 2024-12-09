import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SectionInicio from "./components/SectionInicio";
import SectionQuienesSomos from "./components/SectionQuienesSomos";
import SectionProductos from "./components/SectionProductos";

function AppRouter() {
    return (
        <Router>
            <Header />
            <Routes>
                {/* Ruta para la sección de inicio */}
                <Route path="/" element={<SectionInicio />} />

                {/* Ruta para la sección de "Quiénes somos" */}
                <Route path="/quienes-somos" element={<SectionQuienesSomos />} />

                {/* Ruta para la sección de productos */}
                <Route path="/productos" element={<SectionProductos />} />

                 {/* Ruta dinámica para categorías dentro de productos */}
                <Route path="/productos/:categoria" element={<SectionProductos />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
