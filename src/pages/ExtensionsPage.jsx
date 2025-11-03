// About.jsx
import { useState } from "react";
import { FaGraduationCap, FaTools, FaLaptopCode } from "react-icons/fa";

const items = [
    {
        id: 1,
        icon: <FaGraduationCap />,
        title: "Grado en Desarrollo de Aplicaciones Multiplataforma",
        institution: "IES XYZ",
        year: "2023",
        description:
            "Formación técnica centrada en el desarrollo de software multiplataforma, bases de datos y programación orientada a objetos.",
    },
    {
        id: 2,
        icon: <FaLaptopCode />,
        title: "Curso Full Stack Web Developer",
        institution: "OpenBootcamp",
        year: "2024",
        description:
            "Aprendizaje práctico de tecnologías como React, Node.js, y despliegue en la nube.",
    },
    {
        id: 3,
        icon: <FaTools />,
        title: "Aptitudes y Competencias",
        institution: "Autodidacta",
        year: "",
        description:
            "Trabajo en equipo, resolución de problemas, comunicación efectiva, y constante actualización en nuevas tecnologías.",
    },
    {
        id: 4,
        icon: <FaTools />,
        title: "Aptitudes y Competencias",
        institution: "Autodidacta",
        year: "",
        description:
            "Trabajo en equipo, resolución de problemas, comunicación efectiva, y constante actualización en nuevas tecnologías.",
    },
];

export default function ExtensionsPage() {
    const [selected, setSelected] = useState(items[0]);

    return (
        <div className="flex h-full w-full text-gray-200 bg-[#1e1e1e]">
            {/* Sidebar de "extensiones" */}
            <aside className="w-80 border-r  border-[#3c3c3c] bg-[#252526] flex flex-col">
                <div className="p-2">
                    <input
                        type="text"
                        placeholder="Search Extensions in Marketplace"
                        className="w-full rounded bg-[#3c3c3c] text-sm text-gray-300 placeholder-gray-500 px-3 py-1 focus:outline-none"
                    />
                </div>
                <div className="flex-1overflow-y-auto">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelected(item)}
                            className={`flex items-center gap-3 px-3 py-2 cursor-pointer ${selected.id === item.id
                                ? "bg-[#094771]"
                                : "hover:bg-[#2a2d2e]"
                                }`}
                        >
                            <div className="text-blue-400 text-lg">{item.icon}</div>
                            <div>
                                <p className="text-sm font-semibold">{item.title}</p>
                                <p className="text-xs text-gray-400">{item.institution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>

            {/* Panel derecho: Detalle de la “extensión” */}
            <main className="flex-1 p-6 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {selected.icon}
                    {selected.title}
                </h2>
                <p className="text-gray-400 mb-4">
                    {selected.institution} {selected.year && `• ${selected.year}`}
                </p>
                <p className="text-gray-300 leading-relaxed">{selected.description}</p>

                {/* Imagen tipo “preview” */}
                <div className="mt-6">
                    <img
                        src="/images/extension-preview.png"
                        alt="Extension Preview"
                        className="w-full max-w-lg rounded border border-[#3c3c3c]"
                    />
                </div>
            </main>
        </div>
    );
}
