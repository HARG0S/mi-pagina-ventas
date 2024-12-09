import React from "react";
import { Link } from "react-router-dom";

function Header() {

    return (
        <header className="main-header">
            <div className="container">
            <div className="logo-container">
                <img src="/images/logos/logo3header.jpeg" alt="Logo de la Empresa" className="logo-header" />
                <h2>
                    Cobrear - Materiales de Refrigeración
                </h2>
            </div>

{/*___________________________________________________________________navegacion del heder___________________________________*/}

            <nav className="nav-principal">
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/quienes-somos">Quiénes Somos</Link>
                    </li>
                    <li>
                        <Link to="/productos">Productos</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default Header;
