import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
import CollapsiblePanel from './components/layout/CollapsiblePanel';
import Content from './components/layout/Content';
import ProjectExplorer from './components/ProjectExplorer';
import { usePortfolio } from './context/PortfolioContext';

function App() {
  const { panelContent } = usePortfolio();

  return (
    <div className="h-screen bg-[#1e1e1e] text-[#d4d4d4] flex flex-col font-mono">
      {/* Header fijo en la parte superior */}
      <Header />

      {/* Contenedor principal que ocupa el espacio restante */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar a la izquierda */}
        <Sidebar />

        {/* El resto de los componentes se apilan horizontalmente */}
        <CollapsiblePanel>
          {panelContent === 'projects' && <ProjectExplorer />}
        </CollapsiblePanel>

        <Content />
      </div>

      {/* Footer fijo en la parte inferior */}
      <Footer />
    </div>
  );
}

export default App;