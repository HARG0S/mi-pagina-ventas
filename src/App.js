import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import SectionInicio from "./components/SectionInicio";
import SectionQuienesSomos from "./components/SectionQuienesSomos";
import SectionProductos from "./components/SectionProductos";

function App() {
    return (
        <Router>
            <Header /> {/* El header siempre visible */}
            <Routes>
                <Route path="/" element={<SectionInicio />} />
                <Route path="/quienes-somos" element={<SectionQuienesSomos />} />
                <Route path="/productos" element={<SectionProductos />} />
            </Routes>
        </Router>
    );
}

export default App;
