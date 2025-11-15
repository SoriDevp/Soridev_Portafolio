import { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import { VscGithubInverted, VscLinkExternal, VscFileCode } from 'react-icons/vsc';
import { fetchGitHubReadme } from '../utils/githubUtils';
import {
    IconReact,
    IconTypeScript,
    IconJS,
    IconNodeJs,
    IconTailwindCSS,
    IconHTML5,
    IconCSS3,
    IconVite,
    IconFramerMotion,
    IconNextJs,
    IconMySQL,
    IconApi,
    IconIA
} from '../assets/icons/tech';

// Componente para seleccionar el icono correcto según la tecnología
const TechIcon = ({ technology, className = "w-8 h-8" }) => {
    // Normalizamos el nombre de la tecnología
    const techKey = technology?.toLowerCase().trim();

    switch (techKey) {
        case 'typescript':
        case 'ts':
            return <IconTypeScript className={className} />;
        case 'react':
            return <IconReact className={className} />;
        case 'javascript':
        case 'js':
            return <IconJS className={className} />;
        case 'node.js':
        case 'nodejs':
            return <IconNodeJs className={className} />;
        case 'tailwindcss':
        case 'tailwind':
            return <IconTailwindCSS className={className} />;
        case 'html5':
        case 'html':
            return <IconHTML5 className={className} />;
        case 'css3':
        case 'css':
            return <IconCSS3 className={className} />;
        case 'vite':
            return <IconVite className={className} />;
        case 'framer motion':
        case 'framermotion':
            return <IconFramerMotion className={className} />;
        case 'next.js':
        case 'nextjs':
            return <IconNextJs className={className} />;
        case 'mysql':
            return <IconMySQL className={className} />;
        case 'api':
        case 'apis':
            return <IconApi className={className} />;
        case 'ia':
        case 'ai':
            return <IconIA className={className} />;
        default:
            return <VscFileCode className={className} />;
    }
};

export default function ProjectDetails({ project }) {
    const [readme, setReadme] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        // Si hay repoUrl, intentar obtener el README desde GitHub
        if (project.repoUrl) {
            fetchGitHubReadme(project.repoUrl)
                .then(text => {
                    setReadme(text);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error("Error al cargar el README desde GitHub:", error);
                    // Si falla GitHub, intentar con readmeUrl local como fallback
                    if (project.readmeUrl) {
                        return fetch(project.readmeUrl)
                            .then(res => {
                                if (!res.ok) {
                                    throw new Error('README.md no encontrado.');
                                }
                                return res.text();
                            })
                            .then(text => {
                                setReadme(text);
                                setIsLoading(false);
                            });
                    } else {
                        setReadme("No se pudo cargar el archivo README.md para este proyecto.");
                        setIsLoading(false);
                    }
                })
                .catch(error => {
                    console.error("Error al cargar el README local:", error);
                    setReadme("No se pudo cargar el archivo README.md para este proyecto.");
                    setIsLoading(false);
                });
        } else if (project.readmeUrl) {
            // Si no hay repoUrl pero sí readmeUrl, usar el local
            fetch(project.readmeUrl)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('README.md no encontrado.');
                    }
                    return res.text();
                })
                .then(text => {
                    setReadme(text);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error("Error al cargar el README:", error);
                    setReadme("No se pudo cargar el archivo README.md para este proyecto.");
                    setIsLoading(false);
                });
        } else {
            setReadme("Este proyecto no tiene README disponible.");
            setIsLoading(false);
        }
    }, [project]);

    if (!project) return null;

    return (
        <div className="h-full overflow-y-auto text-gray-300">
            <div className="max-w-4xl mx-auto p-6 md:p-10">

                {/* --- ENCABEZADO DEL PROYECTO --- */}
                <header className="pb-6 border-b border-gray-700">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.name}</h1>
                    <p className="text-lg text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-4">
                        {project.repoUrl && (
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#333] rounded-md hover:bg-[#444] transition-colors">
                                <VscGithubInverted /> Ver Repositorio
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#0e639c] text-white rounded-md hover:bg-[#1177bb] transition-colors">
                                <VscLinkExternal /> Ver Demo
                            </a>
                        )}
                    </div>
                </header>

                {/* --- TECNOLOGÍAS --- */}
                <section className="py-6 border-b border-gray-700">
                    <h2 className="text-xl font-semibold text-white mb-3">Tecnologías Utilizadas</h2>
                    <div className="flex flex-wrap gap-4 items-center">
                        {project.technologies.map(tech => (
                            <div
                                key={tech}
                                className="flex items-center justify-center bg-[#2a2d2e] p-3 rounded-lg border border-[#3c3c3c] hover:border-blue-400 transition-colors group"
                                title={tech}
                            >
                                <TechIcon technology={tech} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- CONTENIDO DEL README --- */}
                <article className="prose prose-invert prose-pre:bg-[#252526] prose-pre:border prose-pre:border-gray-700 prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 py-6">
                    {isLoading ? <p>Cargando README...</p> : <ReactMarkdown>{readme}</ReactMarkdown>}
                </article>
            </div>
        </div>
    );
}
