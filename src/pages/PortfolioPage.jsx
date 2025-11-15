import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import ProjectDetails from '../components/ProjectDetails';

function PortfolioPage() {
    const { selectedProject } = usePortfolio();

    return (
        <main className="flex-1">
            {selectedProject ? (
                <ProjectDetails project={selectedProject} />
            ) : (
                // Mensaje de bienvenida cuando no hay ningún proyecto seleccionado
                <div className="flex items-center justify-center h-full text-gray-500">
                    <p>Selecciona un proyecto del explorador para ver los detalles.</p>
                </div>
            )}
        </main>
    );
}

export default PortfolioPage;