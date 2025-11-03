import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

function CollapsiblePanel({ children }) {
    const { isPanelOpen } = usePortfolio();

    return (
        // La magia de la transición está en estas clases de Tailwind
        <div
            className={`bg-[#252526] flex-shrink-0 transition-all duration-300 ease-in-out overflow-hidden ${isPanelOpen ? 'w-64 border-r border-black' : 'w-0'
                }`}
        >
            {/* Contenedor interno para evitar que el contenido se deforme durante la animación */}
            <div className="w-64 h-full">
                {children}
            </div>
        </div>
    );
}

export default CollapsiblePanel;