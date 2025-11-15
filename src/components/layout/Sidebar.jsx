import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
// Importamos los iconos, incluyendo VscHome
import { VscFiles, VscAccount, VscMail, VscSettingsGear, VscHome } from 'react-icons/vsc';

// Componente NavItem (sin cambios en su lógica interna)
const NavItem = ({ section, panelId, tooltip, children }) => {
    const { activeSection, panelContent, togglePanel, setActiveSection, closePanel, isPanelOpen } = usePortfolio();

    // Un ítem se considera "activo" si su sección está activa O si el panel que controla está abierto.
    const isActive = (panelId && isPanelOpen && panelContent === panelId) || (!panelId && activeSection === section);

    const handleClick = () => {
        if (panelId) {
            // Si tiene panelId, controla el panel.
            togglePanel(panelId);
            // También podemos establecer la sección activa correspondiente.
            setActiveSection(section);
        } else {
            // Si no, es una navegación simple.
            setActiveSection(section);
            closePanel(); // Cierra cualquier panel abierto.

        }
    };

    return (
        <div
            onClick={handleClick}
            className="relative flex justify-center items-center w-full p-2 md:p-3 text-xl md:text-2xl cursor-pointer text-gray-400 group hover:text-white transition-colors duration-200 flex-shrink-0"
        >
            <span className={`absolute left-0 w-0.5 h-full transition-all duration-200 ${isActive ? 'bg-white' : 'bg-transparent'}`}></span>
            <div className={`${isActive ? 'text-white' : ''}`}>
                {children}
            </div>
            <span className="absolute left-full ml-3 px-2 py-1 text-sm bg-black text-white rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300 pointer-events-none z-20">
                {tooltip}
            </span>
        </div>
    );
};

// Componente principal de la Sidebar
export default function Sidebar() {
    return (
        <aside className="w-12 flex-shrink-0 bg-[#333333] flex flex-col h-full overflow-y-auto">
            {/* Contenedor principal con distribución flexible */}
            <div className="flex flex-col justify-between items-center py-2 min-h-0 flex-1">
                {/* Iconos de navegación superiores */}
                <nav className="flex flex-col items-center space-y-1 md:space-y-2 w-full flex-shrink-0">
                    <NavItem section="home" tooltip="Home">
                        <VscHome />
                    </NavItem>
                    <NavItem section="projects" panelId="projects" tooltip="Explorer">
                        <VscFiles />
                    </NavItem>
                    <NavItem section="about" tooltip="About Me">
                        <VscAccount />
                    </NavItem>
                </nav>

                {/* Iconos de utilidad inferiores */}
                <div className="flex flex-col items-center space-y-1 md:space-y-2 w-full flex-shrink-0 mt-auto pb-8 md:pb-0">
                    <NavItem section="contact" tooltip="Contact Me">
                        <VscMail />
                    </NavItem>
                    <NavItem section="settings" tooltip="Settings">
                        <VscSettingsGear />
                    </NavItem>
                </div>
            </div>
        </aside>
    );
}