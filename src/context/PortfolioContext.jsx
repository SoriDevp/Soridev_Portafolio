import React, { createContext, useState, useContext } from 'react';

const PortfolioContext = createContext();

// Claves para localStorage
const STORAGE_KEYS = {
    ACTIVE_SECTION: 'portfolio_activeSection',
    IS_PANEL_OPEN: 'portfolio_isPanelOpen',
    PANEL_CONTENT: 'portfolio_panelContent',
    SELECTED_PROJECT: 'portfolio_selectedProject',
};

// Función helper para obtener valores del localStorage
const getStoredValue = (key, defaultValue) => {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.error(`Error al leer ${key} del localStorage:`, error);
        return defaultValue;
    }
};

// Función helper para guardar valores en localStorage
const setStoredValue = (key, value) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error al guardar ${key} en localStorage:`, error);
    }
};

export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (!context) {
        throw new Error('usePortfolio debe usarse dentro de un PortfolioProvider');
    }
    return context;
};

export const PortfolioProvider = ({ children }) => {
    // Inicializar estados desde localStorage
    const [activeSection, setActiveSectionState] = useState(() => 
        getStoredValue(STORAGE_KEYS.ACTIVE_SECTION, 'home')
    );
    const [isPanelOpen, setIsPanelOpenState] = useState(() => 
        getStoredValue(STORAGE_KEYS.IS_PANEL_OPEN, false)
    );
    const [panelContent, setPanelContentState] = useState(() => 
        getStoredValue(STORAGE_KEYS.PANEL_CONTENT, null)
    );
    const [selectedProject, setSelectedProjectState] = useState(() => 
        getStoredValue(STORAGE_KEYS.SELECTED_PROJECT, null)
    );

    // Wrappers para setState que también guardan en localStorage
    const setActiveSection = (section) => {
        setActiveSectionState(section);
        setStoredValue(STORAGE_KEYS.ACTIVE_SECTION, section);
    };

    const setIsPanelOpen = (isOpen) => {
        setIsPanelOpenState(isOpen);
        setStoredValue(STORAGE_KEYS.IS_PANEL_OPEN, isOpen);
    };

    const setPanelContent = (content) => {
        setPanelContentState(content);
        setStoredValue(STORAGE_KEYS.PANEL_CONTENT, content);
    };

    const setSelectedProject = (project) => {
        setSelectedProjectState(project);
        setStoredValue(STORAGE_KEYS.SELECTED_PROJECT, project);
    };

    // Función mejorada para abrir/cerrar el panel
    const togglePanel = (contentIdentifier) => {
        // Si se hace clic en el mismo icono y el panel ya está abierto, se cierra.
        if (isPanelOpen && panelContent === contentIdentifier) {
            setIsPanelOpen(false);
            setPanelContent(null);
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