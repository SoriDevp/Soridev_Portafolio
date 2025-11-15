import React from 'react';
import './About_Education.css'; // Importamos el CSS para los estilos
import { useEducationData } from '../../hooks/useEducationData';

// Importamos los iconos de las tecnologías con los nombres correctos
import {
  IconApi,
  IconCSS3,
  IconHTML5,
  IconIA,
  IconJS,
  IconNextJs,
  IconNodeJs,
  IconReact,
  IconTailwindCSS,
  IconTypeScript,
  IconMySQL,
} from '../../assets/icons/tech';

const technologies = [
  { Icon: IconReact, name: 'React' },
  { Icon: IconJS, name: 'JavaScript' },
  { Icon: IconNextJs, name: 'Next.js' },
  { Icon: IconNodeJs, name: 'Node.js' },
  { Icon: IconTypeScript, name: 'TypeScript' },
  { Icon: IconTailwindCSS, name: 'TailwindCSS' },
  { Icon: IconCSS3, name: 'CSS3' },
  { Icon: IconHTML5, name: 'HTML5' },
  { Icon: IconApi, name: 'APIs' },
  { Icon: IconIA, name: 'IA' },
  { Icon: IconMySQL, name: 'MySQL' },
];

export default function About_Education() {
  const { education, loading } = useEducationData();

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Formación y Tecnologías</h2>
      <div className="text-lg text-center text-gray-300 mb-12">
        <p>Mi aprendizaje es un viaje continuo. Combino una sólida formación oficial con una insaciable curiosidad autodidacta. Esta es la intersección de mi conocimiento estructurado y las tecnologías que exploro cada día.</p>
      </div>

      <div className="education-container">
        {/* Columna de la Galaxia de Tecnologías */}
        <div className="tech-galaxy-container">
          <div className="tech-galaxy">
            {technologies.map(({ Icon, name }, index) => (
              <div key={name} className={`tech-icon-wrapper tech-icon-${index}`}>
                <Icon className="tech-icon" />
                <span className="tech-name">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Columna de la Línea de Tiempo */}
        <div className="timeline-container">
          {loading && <p>Cargando información...</p>}
          {education && (
            <>
              <h3 className="timeline-title">Formación Profesional</h3>
              {education.formal.map(item => (
                <div key={item.title} className="timeline-item">
                  <h4 className="item-title">{item.title}</h4>
                  <p className="item-institution">{item.institution} | {item.date}</p>
                  <p className="item-description">{item.description}</p>
                </div>
              ))}

              <h3 className="timeline-title">Formación Complementaria</h3>
              {education.complementary.map(item => (
                <div key={item.title} className="timeline-item">
                  <h4 className="item-title">{item.title}</h4>
                  <p className="item-institution">{item.institution} | {item.date}</p>
                </div>
              ))}

              <h3 className="timeline-title">Idiomas</h3>
              <div className="languages-list">
                {education.languages.map(lang => (
                  <div key={lang.title} className="language-item">
                    <span className="language-title">{lang.title}:</span>
                    <span className="language-level">{lang.level}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

