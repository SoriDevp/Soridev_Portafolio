import { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import { VscGithubInverted, VscLinkExternal } from 'react-icons/vsc';

export default function ProjectDetails({ project }) {
    const [readme, setReadme] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // La ruta a los archivos del proyecto en la carpeta `public`
    const projectPath = `projects/${project.id}`;

    useEffect(() => {
        setIsLoading(true);
        // Usamos la ruta relativa desde la raíz del sitio (la carpeta public)
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
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                            <span key={tech} className="bg-[#2a2d2e] text-blue-300 text-sm font-mono px-3 py-1 rounded-full">{tech}</span>
                        ))}
                    </div>
                </section>

                {/* --- CONTENIDO DEL README --- */}
                <article className="prose prose-invert prose-pre:bg-[#252526] prose-pre:border prose-pre:border-gray-700 prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 py-6">
                    {isLoading ? <p>Cargando README...</p> : <ReactMarkdown>{readme}</ReactMarkdown>}
                </article>

                {/* --- VISTA PREVIA (IFRAME) --- */}
                <section className="mt-8">
                    <h2 className="text-2xl font-bold text-white mb-4">Vista Previa Interactiva</h2>
                    <div className="w-full h-[600px] bg-[#252526] rounded-lg border border-gray-700 overflow-hidden">
                        <iframe src={project.liveUrl} className="w-full h-full border-none" title={`Vista previa de ${project.name}`} />
                    </div>
                </section>
            </div>
        </div>
    );
}
