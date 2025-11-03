import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

import ProjectExplorer from '../components/ProjectExplorer';
// Aún no hemos creado ProjectDetails, pero lo importaremos aquí.
// import ProjectDetails from '../components/ProjectDetails';

function PortfolioPage() {
    const [projects, setProjects] = useState([]);
    const { selectedProject } = usePortfolio();

    // useEffect para cargar los datos del JSON solo una vez.
    useEffect(() => {
        fetch('/data/projects.json')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching projects:", error));
    }, []); // El array vacío asegura que se ejecute solo al montar el componente.

    return (
        <div className="flex h-full">
            <ProjectExplorer projects={projects} />

            <main className="flex-1 p-6">
                {selectedProject ? (
                    // Aquí renderizaremos el componente ProjectDetails
                    <div>
                        <h1 className="text-2xl font-bold">{selectedProject.name}</h1>
                        <p className="mt-4">{selectedProject.description}</p>
                    </div>
                ) : (
                    // Mensaje de bienvenida cuando no hay ningún proyecto seleccionado
                    <div className="flex items-center justify-center h-full text-gray-500">
                        <p>Selecciona un proyecto del explorador para ver los detalles.</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default PortfolioPage;