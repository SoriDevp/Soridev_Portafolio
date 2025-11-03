import React, { useState, Suspense, lazy } from "react";
import { FaGithub, FaLinkedin, FaStar } from "react-icons/fa";
import Avatar from "../assets/images/reflexion2.png";

// Carga diferida de los componentes de las secciones
const About_Introduction = lazy(() => import('../components/sections/About_Introduction'));
const About_Education = lazy(() => import('../components/sections/About_Education'));
const About_Experience = lazy(() => import('../components/sections/About_Experience'));

const LoadingFallback = () => (
    <div className="flex justify-center items-center h-full">
        <p className="text-lg text-gray-400">Cargando...</p>
    </div>
);

export default function AboutPage() {
    const [tab, setTab] = useState("details");

    return (
        <div className="flex flex-col h-full w-full bg-[#1e1e1e] text-gray-200 overflow-hidden">
            {/* Cabecera */}
            <header className="relative flex flex-col md:flex-row items-center md:gap-6 border-b border-[#3c3c3c] p-6">
                <div className="flex-shrink-0 w-40 h-40 md:w-24 md:h-24 bg-[#2d2d2d] rounded-full md:rounded-xl flex items-center justify-center z-10">
                    <img src={Avatar} alt="Esteban" className="rounded-full md:rounded-xl" />
                </div>
                <div className="relative flex flex-col justify-center text-center md:text-left -mt-8 md:mt-0 bg-[#252526] md:bg-transparent p-4 pt-10 md:p-0 rounded-lg md:rounded-none">
                    <h1 className="text-2xl font-semibold text-gray-100">Esteban Calo – Desarrollador de Software</h1>
                    <p className="text-sm text-gray-400">Profesional en desarrollo multiplataforma y web, comprometido con la calidad y la mejora continua.</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                        <span className="flex items-center gap-1"><FaStar className="text-yellow-400" /> 5.0</span>
                        <span>10k+ descargas</span>
                        <a href="https://github.com/SoriDevp" target="_blank" className="flex items-center gap-1 hover:text-white"><FaGithub /> GitHub</a>
                        <a href="https://www.linkedin.com/in/estebancalo" target="_blank" className="flex items-center gap-1 hover:text-white"><FaLinkedin /> LinkedIn</a>
                    </div>
                </div>
            </header>

            {/* Menú de pestañas */}
            <nav className="flex border-b border-[#3c3c3c] bg-[#252526] text-sm">
                {[
                    { id: "details", label: "Detalles" },
                    { id: "features", label: "Formación" },
                    { id: "experience", label: "Experiencia" },
                ].map(({ id, label }) => (
                    <button
                        key={id}
                        onClick={() => setTab(id)}
                        className={`px-5 py-2 transition-colors ${tab === id
                            ? "border-b-2 border-[#007acc] text-white"
                            : "text-gray-400 hover:text-gray-200"
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </nav>

            {/* Contenido principal con Suspense */}
            <main className="flex-1 overflow-y-auto p-6 space-y-4">
                <Suspense fallback={<LoadingFallback />}>
                    {tab === "details" && <About_Introduction />}
                    {tab === "features" && <About_Education />}
                    {tab === "experience" && <About_Experience />}
                </Suspense>
            </main>
        </div>
    );
}
