import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import HomePage from '../../pages/HomePage';
import ProjectsPage from '../../pages/ProjectsPage';
import AboutPage from '../../pages/AboutPage';
import ContactPage from '../../pages/ContactPage';
import SettingsPage from '../../pages/SettingsPage';
import SettingsPage_V2 from '../../pages/SettingsPage_V2';
import SettingsPage_V3 from '../../pages/SettingsPage_V3';
// Importa tus otras páginas aquí

function Content() {
    const { activeSection } = usePortfolio();

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'home':
                return <HomePage />;
            case 'projects':
                return <ProjectsPage />;
            case 'about':
                return <AboutPage />;
            case 'contact':
                return <ContactPage />;
            case "settings":
                // return <SettingsPage />;

                return <SettingsPage_V2 />;
            // return <SettingsPage_V3 />;
            // Agrega más casos según tus secciones
            default:
                return <HomePage />;
        }
    };

    return (
        // Estas clases son la clave para el área de contenido
        <div className="flex-1 bg-[#1e1e1e] overflow-y-auto">
            {renderActiveSection()}
        </div>
    );
}

export default Content;