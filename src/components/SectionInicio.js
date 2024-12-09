import React from "react";
import { Link } from "react-router-dom";


function SectionInicio() {

    // Datos para las categorías
    const categories = [
    {
        id: 1,
        title: "Caños de Cobre",
        description: "Caños de alta calidad para refrigeración.",
        image: "/images/categories/copper-pipes.jpg",
        link: "/productos?categoria=copper",
    },

    {
        id: 2,
        title: "aislaciones",
        description: "Bobinas de cobre para diversas aplicaciones.",
        image: "/images/categories/pancakes.jpg",
        link: "/productos?categoria=aislaciones",
    },

    {
        id: 3,
        title: "Equipos de Aire Acondicionado",
        description: "Variedad de bobinas de cobre a medida.",
        image: "/images/categories/aire-acondicionado.png",
        link: "/productos?categoria=aire-acondicionado",
    },

    {
        id: 4,
        title: "Refrigerantes",
        description: "Refrigerantes para sistemas de aire acondicionado.",
        image: "/images/categories/refrigerante.png",
        link: "/productos?categoria=refrigerante",
    },

    {
        id: 5,
        title: "kits de instalacion",
        description: "Todo tipo de accesorios para refrigeración.",
        image: "/images/categories/accessories.jpg",
        link: "/productos?categoria=kits",
    },
];

    return (
    <section className="section-inicio">
        <div className="banner">
            <img src="/images/banner/banner.jpg" alt="Banner de la empresa" className="banner-image" />
            <div className="banner-overlay">
                <div className="banner-content">
                    <img src="/images/logos/logo3.jpeg" alt="Cobrear Logo" className="banner-logo" />
                    
                    <h2>
                        Tu Mejor Aliado en Refrigeración
                    </h2>
                    
                    <p>
                        Materiales variados de alta calidad en la industria de Refrigeracion
                    </p>
                    
                    <p>
                        En cobrear estamos comprometidos a brindarte productos y atencion de la mejor calidad en la puerta de tu hogar
                    </p>
                    
                </div>
            </div>
        </div>

        <div className="categories-section">
            <h2>
                Nuestros Productos
            </h2>
        <div className="categories-container">

            {categories.map((category) => (
            <Link
                key={category.id}
                to={category.link}
                className="category-card"
            >
            <img 
    src={category.image} 
    alt={category.title} 
    style={{  width: '100%', height: '70%', display: 'block', margin: '0rem' }} 
/>


        <div className="category-info">
                <h3>
                    {category.title}
                </h3>
                <p>
                    {category.description}
                </p>
        </div>
            </Link>
            ))}
        </div>
        </div>
    </section>
);
}

export default SectionInicio;