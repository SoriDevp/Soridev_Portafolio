import { useState, useEffect, useRef } from 'react';

const PROMPT = 'soridev@portfolio:~$';

const initialOutput = [
    { type: 'system', text: 'Bienvenido a la terminal de contacto.' },
    { type: 'system', text: 'Escribe `help` para ver la lista de comandos disponibles.' },
];

export default function ContactPageTerminal() {
    const [lines, setLines] = useState(initialOutput);
    const [command, setCommand] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const terminalEndRef = useRef(null);

    const scrollToBottom = () => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [lines]);

    const handleCommand = (e) => {
        if (e.key !== 'Enter') return;

        const newLines = [...lines, { type: 'prompt', text: `${PROMPT} ${command}` }];
        const [cmd, ...args] = command.trim().split(' ');
        const argString = args.join(' ').replace(/['"]/g, '');

        switch (cmd) {
            case 'help':
                newLines.push({ type: 'system', text: 'Comandos disponibles:' });
                newLines.push({ type: 'system', text: '  `set name "<tu-nombre>"`   - Para establecer tu nombre.' });
                newLines.push({ type: 'system', text: '  `set email "<tu-email>"`  - Para establecer tu email.' });
                newLines.push({ type: 'system', text: '  `set message "<tu-mensaje>"` - Para establecer tu mensaje.' });
                newLines.push({ type: 'system', text: '  `show`                      - Muestra los datos actuales.' });
                newLines.push({ type: 'system', text: '  `send`                      - Envía el formulario.' });
                newLines.push({ type: 'system', text: '  `clear`                     - Limpia la terminal.' });
                break;
            case 'set':
                const [field, ...valueParts] = args;
                const value = valueParts.join(' ').replace(/['"]/g, '');
                if (['name', 'email', 'message'].includes(field)) {
                    setFormData(prev => ({ ...prev, [field]: value }));
                    newLines.push({ type: 'success', text: `Campo '${field}' actualizado.` });
                } else {
                    newLines.push({ type: 'error', text: `Error: Campo '${field}' desconocido.` });
                }
                break;
            case 'show':
                newLines.push({ type: 'system', text: 'Datos del formulario:' });
                newLines.push({ type: 'system', text: `  - Nombre: ${formData.name || 'No establecido'}` });
                newLines.push({ type: 'system', text: `  - Email: ${formData.email || 'No establecido'}` });
                newLines.push({ type: 'system', text: `  - Mensaje: ${formData.message || 'No establecido'}` });
                break;
            case 'send':
                if (formData.name && formData.email && formData.message) {
                    newLines.push({ type: 'system', text: 'Enviando mensaje...' });
                    // Lógica de envío real aquí
                    console.log('Enviando:', formData);
                    newLines.push({ type: 'success', text: '¡Mensaje enviado con éxito!' });
                    setFormData({ name: '', email: '', message: '' }); // Reset form
                } else {
                    newLines.push({ type: 'error', text: 'Error: Faltan campos por rellenar. Usa `show` para ver el estado.' });
                }
                break;
            case 'clear':
                setLines(initialOutput);
                setCommand('');
                return;
            case '':
                break;
            default:
                newLines.push({ type: 'error', text: `Comando no reconocido: ${cmd}. Escribe 'help' para ayuda.` });
        }

        setLines(newLines);
        setCommand('');
    };

    return (
        <div className="flex flex-col bg-[#1E1E1E] font-mono  h-96 p-4 text-sm text-white overflow-y-auto" onClick={() => document.getElementById('terminal-input').focus()}>
            {lines.map((line, index) => (
                <div key={index} className="whitespace-pre-wrap">
                    {line.type === 'prompt' && <span>{line.text}</span>}
                    {line.type === 'system' && <span className="text-gray-400">{line.text}</span>}
                    {line.type === 'success' && <span className="text-green-400">{line.text}</span>}
                    {line.type === 'error' && <span className="text-red-400">{line.text}</span>}
                </div>
            ))}
            <div ref={terminalEndRef} />
            <div className="flex mt-2">
                <span className="text-gray-400">{PROMPT}</span>
                <input
                    id="terminal-input"
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={handleCommand}
                    className="flex-1 bg-transparent outline-none ml-2 text-white"
                    autoFocus
                />
            </div>
        </div>
    );
}
