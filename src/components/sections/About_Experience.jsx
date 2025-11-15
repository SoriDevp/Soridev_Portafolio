import React from 'react';
import './About_Experience.css';
import { useProjectsData } from '../../hooks/useProjectsData';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  IconReact,
  IconNodeJs,
  IconJS,
  IconHTML,
  IconCSS3,
  IconTailwindCSS,
  IconTypeScript,
  IconNextJs
} from '../../assets/icons/tech';
import { VscGithubInverted, VscLinkExternal } from 'react-icons/vsc';

// Mapear nombres de tecnología a componentes de icono
const techIconMap = {
  React: <IconReact />,
  "Node.js": <IconNodeJs />,
  "NodeJs": <IconNodeJs />,
  JavaScript: <IconJS />,
  "JS": <IconJS />,
  HTML5: <IconHTML />,
  "HTML": <IconHTML />,
  CSS3: <IconCSS3 />,
  "CSS": <IconCSS3 />,
  TailwindCSS: <IconTailwindCSS />,
  "Tailwind": <IconTailwindCSS />,
  TypeScript: <IconTypeScript />,
  "TS": <IconTypeScript />,
  NextJs: <IconNextJs />,
  "Next.js": <IconNextJs />,
  Vite: null, // Vite no tiene icono aún, se mostrará solo el texto
  "Framer Motion": null, // Framer Motion no tiene icono aún
};

export default function About_Experience() {
  const { projects, loading } = useProjectsData();
  const { setActiveSection, togglePanel, setSelectedProject } = usePortfolio();

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setActiveSection('projects');
    togglePanel('projects');
  };

  if (loading) {
    return (
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-cyan-400">Experiencia y Crecimiento</h2>
        <div className="text-lg text-gray-300">Cargando proyectos...</div>
      </section>
    );
  }

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4 text-cyan-400">Experiencia y Crecimiento</h2>
      <div className="text-lg text-gray-300 space-y-4 mb-12">
        <p>
          Mi "experiencia" se ha forjado en horas de desarrollo y la creación de proyectos desde cero. Cada proyecto es un escalón en mi aprendizaje, donde aplico y consolido nuevos conocimientos.
        </p>
        <p>
          Este es un reflejo de mi camino, demostrando cómo cada desafío me ha preparado para el siguiente.
        </p>
      </div>

      <div className="experience-timeline">
        {projects.map((project, index) => (
          <div key={project.id} className="timeline-project-item">
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map(tech => {
                  const icon = techIconMap[tech] || techIconMap[tech.replace(/\s+/g, '')];
                  return (
                    <div key={tech} className="tech-tag">
                      {icon && React.cloneElement(icon, { className: 'tech-icon-small' })}
                      <span>{tech}</span>
                    </div>
                  );
                })}
              </div>
              <div className="project-actions mt-4 flex gap-3">
                <button
                  onClick={() => handleProjectClick(project)}
                  className="px-3 py-1.5 bg-[#007acc] text-white text-sm rounded hover:bg-[#005a9e] transition-colors flex items-center gap-2"
                >
                  Ver Detalles
                </button>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#333] text-white text-sm rounded hover:bg-[#444] transition-colors flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <VscGithubInverted size={16} />
                    Repositorio
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl.startsWith('http') ? project.liveUrl : `https://${project.liveUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#0e639c] text-white text-sm rounded hover:bg-[#1177bb] transition-colors flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <VscLinkExternal size={16} />
                    Demo
                  </a>
                )}
              </div>
            </div>
            <div className="timeline-milestone">
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

