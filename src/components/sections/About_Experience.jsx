import React from 'react';
import './About_Experience.css'; // Importar el CSS
import { projects } from '../../data/projects'; // Importar los datos de los proyectos

// Importar los iconos que necesitemos (ajustar según los proyectos)
import {
  IconReact,
  IconNodeJs,
  IconJS,
  IconHTML,
  IconCSS3,
  IconTailwindCSS
} from '../../assets/icons/tech';

// Mapear nombres de tecnología a componentes de icono
const techIconMap = {
  React: <IconReact />,
  "Node.js": <IconNodeJs />,
  JavaScript: <IconJS />,
  HTML5: <IconHTML />,
  CSS3: <IconCSS3 />,
  TailwindCSS: <IconTailwindCSS />,
  // Añadir más si es necesario
};

// Ordenamos los proyectos para que cuenten una historia de crecimiento
const projectTimeline = [
  projects.find(p => p.id === 'proj-03'), // Empezamos con los fundamentos
  projects.find(p => p.id === 'proj-02'), // Luego el backend
  projects.find(p => p.id === 'proj-01'), // Y finalmente el front-end moderno
].filter(Boolean); // Filtramos por si algún proyecto no se encuentra

const About_Experience = () => {
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
        {projectTimeline.map((project, index) => (
          <div key={project.id} className="timeline-project-item">
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map(tech => (
                  <div key={tech} className="tech-tag">
                    {techIconMap[tech] && React.cloneElement(techIconMap[tech], { className: 'tech-icon-small' })}
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="timeline-milestone">
              <div className="milestone-circle">{index + 1}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About_Experience;