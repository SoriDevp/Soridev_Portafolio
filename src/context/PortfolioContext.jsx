import React, { createContext, useState, useContext } from 'react';

const PortfolioContext = createContext();

export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (!context) {
        throw new Error('usePortfolio debe usarse dentro de un PortfolioProvider');
    }
    return context;
};

export const PortfolioProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState('home');
    // Nuevo estado para controlar la visibilidad del panel lateral
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    // Nuevo estado para saber QUÉ contenido mostrar en el panel
    const [panelContent, setPanelContent] = useState(null); // 'projects', 'search', etc.
    // Estado para el proyecto seleccionado en el explorador
    const [selectedProject, setSelectedProject] = useState(null);

    // Función mejorada para abrir/cerrar el panel
    const togglePanel = (contentIdentifier) => {
        // Si se hace clic en el mismo icono y el panel ya está abierto, se cierra.
        if (isPanelOpen && panelContent === contentIdentifier) {
            setIsPanelOpen(false);
        } else {
            // Si se hace clic en un nuevo icono, se cambia el contenido y se abre.
            setPanelContent(contentIdentifier);
            setIsPanelOpen(true);
        }
    };

    // Función para cerrar el panel, útil al cambiar de sección principal.
    const closePanel = () => {
        setIsPanelOpen(false);
        setPanelContent(null); // Limpiamos el contenido al cerrar
    };

    const value = {
        activeSection,
        setActiveSection,
        isPanelOpen,
        panelContent,
        togglePanel,
        closePanel, selectedProject,
        setSelectedProject,
    };

    return (
        <PortfolioContext.Provider value={value}>
            {children}
        </PortfolioContext.Provider>
    );
};