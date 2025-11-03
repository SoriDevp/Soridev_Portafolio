import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import ProjectExplorer from '../components/ProjectExplorer';
import ProjectDetails from '../components/ProjectDetails';

function ProjectsPage() {
    const { selectedProject } = usePortfolio();

    return (
        <div className="flex h-full">
            {/* El explorador de proyectos ahora es parte del panel colapsable, 
                pero lo dejamos aquí conceptualmente. La lógica del panel lo mostrará/ocultará. */}

            <main className="flex-1 overflow-y-auto">
                {selectedProject ? (
                    // Si hay un proyecto seleccionado, muestra sus detalles.
                    <ProjectDetails project={selectedProject} />
                ) : (
                    // Mensaje de bienvenida cuando no hay ningún proyecto seleccionado.
                    <div className="flex items-center justify-center h-full text-gray-500 text-center p-4">
                        <p>Selecciona un proyecto del explorador para ver los detalles.</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default ProjectsPage;