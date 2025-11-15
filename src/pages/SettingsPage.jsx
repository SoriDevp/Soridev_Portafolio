import { useState } from 'react';
import { themes } from '../data/themes';

// Sub-componente para renderizar cada objeto del tema
const ThemeObject = ({ theme, isSelected, onSelect }) => {
    const renderObject = () => {
        switch (theme.id) {
            case 'vscode-dark':
                return (
                    <div className="w-40 h-28 bg-[#1E1E1E] border-2 border-[#3C3C3C] rounded-md p-2 flex flex-col justify-between">
                        <div className="flex justify-start gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-xs text-left">
                            <p><span className="text-[#569CD6]">const</span> <span className="text-[#4EC9B0]">name</span> = <span className="text-[#CE9178]">'SoriDev'</span>;</p>
                            <p><span className="text-[#C586C0]">import</span> React from <span className="text-[#CE9178]">'react'</span>;</p>
                        </div>
                    </div>
                );
            case '8-bit-glory':
                return (
                    <div className="w-32 h-44 bg-gray-300 border-2 border-gray-400 rounded-lg p-2 flex flex-col items-center justify-around">
                        <div className="w-24 h-16 bg-green-900 border-2 border-black rounded-sm font-mono text-green-400 text-[6px] p-1">PIXEL PORTFOLIO</div>
                        <div className="w-full flex justify-between items-center px-2">
                            <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                            <div className="flex gap-2">
                                <div className="w-6 h-3 rounded-full bg-red-700 transform -rotate-45"></div>
                                <div className="w-6 h-3 rounded-full bg-red-700 transform -rotate-45"></div>
                            </div>
                        </div>
                    </div>
                );
            case 'blueprint-draft':
                return (
                    <div className="w-40 h-28 bg-[#0A2A4F] border-2 border-[#33AFFF] rounded-md p-2 text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '1rem 1rem' }}></div>
                        <p className="text-xs">Project: Portfolio</p>
                        <div className="w-2/3 h-1 bg-cyan-200 mt-2"></div>
                        <div className="w-1/2 h-1 bg-cyan-200 mt-1"></div>
                    </div>
                );
            case 'paper-ink':
                return (
                    <div className="w-40 h-28 bg-[#D2B48C] rounded-md p-1 flex items-center justify-center shadow-lg">
                        <div className="w-full h-full bg-[#F5F5DC] p-2 border-l-2 border-red-400">
                            <div className="w-full h-0.5 bg-gray-300 mt-2"></div>
                            <div className="w-2/3 h-0.5 bg-gray-300 mt-1"></div>
                            <div className="w-full h-0.5 bg-gray-300 mt-1"></div>
                        </div>
                    </div>
                );
            default:
                return <div className="w-32 h-32 bg-gray-500"></div>;
        }
    };

    return (
        <div
            className={`flex-shrink-0 p-4 flex flex-col items-center gap-3 cursor-pointer transition-transform duration-300 ${isSelected ? 'scale-110' : 'hover:scale-105'}`}
            onClick={onSelect}
        >
            {renderObject()}
            <h3 className={`text-sm font-semibold transition-colors ${isSelected ? 'text-white' : 'text-gray-400'}`}>{theme.name}</h3>
        </div>
    );
};

export default function SettingsPage() {
    const [selected, setSelected] = useState(null);
    const [activeTheme, setActiveTheme] = useState('vscode-dark');

    const handleSelect = (theme) => {
        setSelected(theme);
    };

    const handleActivate = () => {
        if (!selected) return;
        setActiveTheme(selected.id);
        console.log(`Activating theme: ${selected.id}`);
        // Close the detail view after activation
        setSelected(null);
    };

    return (
        <div className="relative w-full h-full flex flex-col items-center pt-6 bg-[#3a3a3a] overflow-hidden " style={{ backgroundImage: 'radial-gradient(#4f4f4f 1px, transparent 1px)', backgroundSize: '1rem 1rem' }}>
            <div className="text-center mb-8 flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">El Taller</h1>
                <p className="text-gray-300">Selecciona un proyecto del banco de trabajo para cambiar la experiencia.</p>
            </div>
            <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${selected ? 'opacity-50' : 'opacity-0 pointer-events-none'}`} onClick={() => setSelected(null)}></div>

            <div className="w-full flex-1 flex flex-col pb-6 md:flex-row items-center md:justify-center overflow-y-auto md:overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
                {themes.map(theme => (
                    <ThemeObject
                        key={theme.id}
                        theme={theme}
                        isSelected={selected?.id === theme.id}
                        onSelect={() => handleSelect(theme)}
                    />
                ))}
            </div>

            {/* Details Panel when an item is selected */}
            <div className={`absolute bottom-12 w-4/5 max-w-md bg-[#252526] p-6 rounded-lg shadow-2xl border border-[#3c3c3c] text-center transition-all duration-300 ${selected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                {selected && (
                    <>
                        <h2 className="text-xl font-bold text-white">{selected.name}</h2>
                        <p className="text-sm text-gray-400 my-2">{selected.description}</p>
                        <button
                            onClick={handleActivate}
                            disabled={activeTheme === selected.id}
                            className={`mt-4 w-full text-md px-4 py-2 rounded-md transition-colors font-semibold ${activeTheme === selected.id ? 'bg-[#33373A] text-gray-500 cursor-not-allowed' : 'bg-[#007ACC] text-white hover:bg-[#009CFF]'}`}>
                            {activeTheme === selected.id ? 'Active' : 'Activate Theme'}
                        </button>
                    </>
                )}
            </div>

        </div>
    );
}
