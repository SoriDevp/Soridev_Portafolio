import { useState } from "react";
import LineNumbers from "../components/ui/LineNumbers";
import IconSourceControl from "../assets/icons/IconSourceControl";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de envío del formulario
        console.log("Form data submitted:", formData);
        alert("¡Mensaje enviado! Revisa la consola para ver los datos.");
    };

    return (
        <div className="flex h-full bg-[#1E1E1E] font-mono  overflow-hidden  ">
            <LineNumbers count={14} />
            <div className="flex-1 p-6 text-[#D4D4D4] text-base">
                <form onSubmit={handleSubmit}>
                    <pre>
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
                        className="mt-8 flex items-center gap-3 px-4 py-2 text-sm font-sans font-semibold rounded-md border border-[#3C3C3C] bg-[#33373A] text-[#D4D4D4] hover:bg-[#44484C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#007ACC]"
                    >
                        <IconSourceControl className="w-5 h-5" />
                        Commit & Send
                    </button>
                </form>
            </div>
        </div>
    );
}
