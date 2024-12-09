import React from "react";
import { useParams } from "react-router-dom";

function SectionProductos() {
    // Capturar la categoría desde la URL
    const { categoria } = useParams();

    // Crear un mapa con datos de las categorías
    const categoryData = {
        copper: {
            title: "Caños de Cobre",
            description: "Ofrecemos caños de cobre de alta calidad para refrigeración y otras aplicaciones.",
        },
        pancakes: {
            title: "Pancakes",
            description: "Bobinas de cobre ideales para sistemas de refrigeración compactos.",
        },
        refrigerants: {
            title: "Refrigerantes",
            description: "Refrigerantes de última generación para equipos de aire acondicionado.",
        },
        aislaciones: {
            title: "Aislaciones",
            description: "Materiales de aislamiento para optimizar la eficiencia térmica.",
        },
        kits: {
            title: "Kits de Instalación",
            description: "Kits completos para instalar sistemas de refrigeración de manera profesional.",
        },
    };

    // Obtener los datos de la categoría seleccionada o un mensaje predeterminado
    const category = categoryData[categoria] || {
        title: "Categoría no encontrada",
        description: "La categoría que seleccionaste no está disponible.",
    };

    return (
        <section className="section-productos">
            <h1>{category.title}</h1>
            <p>{category.description}</p>
        </section>
    );
}

export default SectionProductos;
