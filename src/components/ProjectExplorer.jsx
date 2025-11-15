import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { useProjectsData } from '../hooks/useProjectsData';
import { IconReact, IconTypeScript, IconJS, IconNodeJs, IconTailwindCSS, IconHTML5, IconCSS3, IconVite, IconFramerMotion } from '../assets/icons/tech';
import { VscFileCode } from 'react-icons/vsc'; // Icono por defecto

// Componente para seleccionar el icono correcto según la tecnología
const TechIcon = ({ technology, ...props }) => {
    // Normalizamos el nombre de la tecnología a minúsculas
    const techKey = technology?.toLowerCase();

    switch (techKey) {
        case 'typescript':
            return <IconTypeScript {...props} />;
        // Agrega más casos para otras tecnologías aquí
        case 'react':
            return <IconReact {...props} />;
        case 'javascript':
            return <IconJS {...props} />;
        case 'node.js':
            return <IconNodeJs {...props} />;
        case 'tailwindcss':
            return <IconTailwindCSS {...props} />;
        case 'html5':
            return <IconHTML5 {...props} />;
        case 'css3':
            return <IconCSS3 {...props} />;
        case 'vite':
            return <IconVite {...props} />;
        case 'framer motion':
            return <IconFramerMotion {...props} />;
        default:
            return <VscFileCode {...props} />;
    }
};

// Recibe la lista de proyectos como prop, pero el estado lo maneja el contexto.
export default function ProjectExplorer() {
    const { projects, loading } = useProjectsData();
    const { selectedProject, setSelectedProject, closePanel } = usePortfolio();


    const handleClick = (project) => {
        setSelectedProject(project);
        if (window.innerWidth < 768) {
            closePanel();
        }
    };
    if (loading) {
        return <div>Cargando...</div>; // O un indicador de carga si lo prefieres
    }


    return (
        // Hemos ajustado el ancho y quitado el margen superior para que se integre mejor.
        <aside className="w-64 bg-[#252526] border-r border-[#3c3c3c] flex-shrink-0">
            <div className="p-2 border-b border-[#3c3c3c] text-sm text-gray-400 uppercase tracking-wider">
                PORTFOLIO
            </div>
            <div className="p-2">

                <ul className="text-sm space-y-1">
                    {projects.map((project) => (
                        <li
                            key={project.id}
                            onClick={() => handleClick(project)}
                            className={`flex items-center gap-2 cursor-pointer px-2 py-1 rounded transition-colors duration-150 ${selectedProject?.id === project.id
                                ? "bg-[#094771] text-white" // Estilo de selección más marcado
                                : "hover:bg-[#383838]"
                                }`}
                        >
                            <TechIcon
                                technology={project.technologies[0]}
                                className="w-4 h-4 flex-shrink-0"
                            />
                            <span>{project.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}