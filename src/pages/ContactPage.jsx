import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LineNumbers from "../components/ui/LineNumbers";
import Terminal from "../components/ui/Terminal";
import { VscPlay } from "react-icons/vsc";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [lineCount, setLineCount] = useState(1);
    const [showTerminal, setShowTerminal] = useState(false);
    const [terminalLines, setTerminalLines] = useState([]);
    const finalLineCount = 28;

    useEffect(() => {
        if (lineCount < finalLineCount) {
            const timer = setTimeout(() => setLineCount(lineCount + 1), 30);
            return () => clearTimeout(timer);
        }
    }, [lineCount]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
        setTerminalLines([
            "Compilando solicitud...",
            `Nombre: ${formData.name}`,
            `Email: ${formData.email}`,
            "...",
            "Paquete enviado a la red de SoriDev.",
            "¡Gracias por tu mensaje! Te responderé pronto."
        ]);
        setShowTerminal(true);
    };

    const handleCloseTerminal = () => {
        setShowTerminal(false);
        setFormData({ name: "", email: "", message: "" }); // Opcional: resetear el formulario al cerrar
    }

    return (
        <div className="flex flex-col h-full w-full font-mono relative">
            <div className="flex-1 flex overflow-hidden">
                <LineNumbers count={lineCount} />
                <motion.div
                    className="flex-1 p-6 text-[#D4D4D4] text-base"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit}>
                        <pre className="whitespace-pre-wrap">
                            <code>
                                <span className="text-[#9CDCFE]">const</span>{" "}
                                <span className="text-[#4FC1FF]">contactRequest</span>{" "}
                                <span className="text-[#D4D4D4]">=</span>{" "}
                                <span className="text-[#D4D4D4]">{'{'}</span>
                                <br />
                                {"  "}
                                <span className="text-[#9CDCFE]">name</span>
                                <span className="text-[#D4D4D4]">:</span>{" "}
                                <span className="text-[#CE9178]">"</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Tu nombre..."
                                    className="bg-transparent outline-none text-[#CE9178] w-64"
                                    required
                                />
                                <span className="text-[#CE9178]">"</span>
                                <span className="text-[#D4D4D4]">,</span>
                                <br />
                                {"  "}
                                <span className="text-[#9CDCFE]">email</span>
                                <span className="text-[#D4D4D4]">:</span>{" "}
                                <span className="text-[#CE9178]">"</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="tu@email.com"
                                    className="bg-transparent outline-none text-[#CE9178] w-64"
                                    required
                                />
                                <span className="text-[#CE9178]">"</span>
                                <span className="text-[#D4D4D4]">,</span>
                                <br />
                                {"  "}
                                <span className="text-[#9CDCFE]">message</span>
                                <span className="text-[#D4D4D4]">:</span>{" "}
                                <span className="text-[#CE9178]">`</span>
                                <br />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Escribe tu mensaje aquí..."
                                    className="bg-[#282828] outline-none text-[#CE9178] w-full h-24 resize-none p-2 rounded"
                                    required
                                ></textarea>
                                <br />
                                <span className="text-[#CE9178]">`</span>
                                <span className="text-[#D4D4D4]">,</span>
                                <br />
                                <span className="text-[#D4D4D4]">{'}'}</span>;
                            </code>
                        </pre>
                        <button
                            type="submit"
                            className="mt-8 flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
                            aria-label="Ejecutar"
                        >
                            <VscPlay size={24} />
                        </button>
                    </form>
                </motion.div>
            </div>
            <Terminal
                show={showTerminal}
                lines={terminalLines}
                onClose={handleCloseTerminal}
            />
        </div>
    );
}