import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import LineNumbers from '../components/ui/LineNumbers';
import Terminal from '../components/ui/Terminal';

// Paleta de colores
const colors = {
    keyword: "#569CD6",
    string: "#CE9178",
    variable: "#9CDCFE",
    property: "#4FC1FF",
    comment: "#6A9955",
    text: "#D4D4D4",
};

// Datos del código
const codeLines = [
    { type: "comment", text: "// Hola, soy Esteban Calo (SoriDev) 👋\n\n" },
    { type: "keyword", text: "const " },
    { type: "variable", text: "SoriDev " },
    { type: "text", text: "= {" },
    { type: "property", text: "  rol" },
    { type: "text", text: ": " },
    { type: "string", text: '"Desarrollador Web Full Stack"' },
    { type: "text", text: ",\n" },
    { type: "property", text: "  stack" },
    { type: "text", text: ": [" },
    { type: "string", text: '"React"' },
    { type: "text", text: ", " },
    { type: "string", text: '"Node.js"' },
    { type: "text", text: ", " },
    { type: "string", text: '"Tailwind"' },
    { type: "text", text: "],\n" },
    { type: "property", text: "  objetivo" },
    { type: "text", text: ": " },
    { type: "string", text: '"Crear interfaces limpias, funcionales y con alma"' },
    { type: "text", text: ",\n" },
    { type: "property", text: "  contacto" },
    { type: "text", text: ": " },
    { type: "string", text: '"esteban@soridev.com"' },
    { type: "text", text: "\n};" },
];

// Contenido para el panel de la terminal
const terminalLines = [
    "Inicializando portfolio...",
    "Compilando módulos de React...",
    "Estilos aplicados con TailwindCSS...",
    "¡Bienvenido a mi espacio de trabajo interactivo!"
];



export default function HomePage() {
    const { setActiveSection, togglePanel } = usePortfolio();
    const [progress, setProgress] = useState(0);
    const [lineCount, setLineCount] = useState(1);
    const [typingDone, setTypingDone] = useState(false);
    const [terminalCompleted, setTerminalCompleted] = useState(false);

    const totalLength = React.useMemo(() => codeLines.reduce((acc, curr) => acc + curr.text.length, 0), []);

    useEffect(() => {
        if (progress >= totalLength) {
            setTypingDone(true);
            return;
        }

        const interval = setInterval(() => {
            setProgress(prev => prev + 1);
        }, 25);

        return () => clearInterval(interval);
    }, [progress, totalLength]);

    useEffect(() => {
        let charCount = 0;
        let currentLines = 1;
        for (const segment of codeLines) {
            if (charCount + segment.text.length >= progress) {
                const visibleText = segment.text.substring(0, progress - charCount);
                currentLines += (visibleText.match(/\n/g) || []).length;
                break;
            }
            currentLines += (segment.text.match(/\n/g) || []).length;
            charCount += segment.text.length;
        }
        setLineCount(currentLines);
    }, [progress]);

    const renderCode = () => {
        let remaining = progress;
        return codeLines.map((part, index) => {
            if (remaining <= 0) return null;

            const textToShow = part.text.substring(0, remaining);
            remaining -= textToShow.length;

            return (
                <span key={index} style={{ color: colors[part.type] || colors.text }}>
                    {textToShow}
                </span>
            );
        }).filter(Boolean);
    };

    const setProjectExplorer = () => {
        setActiveSection('projects');
        togglePanel("projects");
    }

    return (
        <div className="flex flex-col h-full w-full font-mono relative">


            <div className="flex-1 flex overflow-auto z-10">
                <LineNumbers count={lineCount + 2} />
                <div className="flex-1 pl-4">
                    <pre className="whitespace-pre-wrap text-base leading-relaxed mt-6">
                        {renderCode()}
                        {!typingDone && <span className="inline-block w-2 h-5 bg-[#d4d4d4] align-middle animate-pulse"></span>}
                    </pre>
                </div>
            </div>

            <Terminal
                show={typingDone}
                lines={terminalLines}
                onComplete={() => setTerminalCompleted(true)}
            />

            {terminalCompleted && (
                <motion.div
                    className="absolute bottom-12 right-4 flex gap-4 z-20"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <button
                        onClick={setProjectExplorer}
                        className="bg-[#0e639c] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#1177bb] transition-colors duration-300 shadow-lg"
                    >
                        Explorar Proyectos
                    </button>
                </motion.div>
            )}
        </div>
    );
}
