import { useState, useEffect, useMemo, useCallback } from 'react';
import { themes } from '../data/themes';

export default function SettingsPage_V3() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeTheme, setActiveTheme] = useState('vscode-dark');

    const filteredThemes = useMemo(() => {
        if (!searchQuery) return themes;
        return themes.filter(theme =>
            theme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            theme.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const openPalette = () => setIsOpen(true);
    const closePalette = () => setIsOpen(false);

    const handleActivate = useCallback((themeId) => {
        setActiveTheme(themeId);
        console.log(`Activating theme: ${themeId}`);
        closePalette();
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape') closePalette();

            if (isOpen) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setActiveIndex(prev => (prev + 1) % filteredThemes.length);
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setActiveIndex(prev => (prev - 1 + filteredThemes.length) % filteredThemes.length);
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    if (filteredThemes[activeIndex]) {
                        handleActivate(filteredThemes[activeIndex].id);
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, filteredThemes, activeIndex, handleActivate]);

    useEffect(() => {
        setActiveIndex(0);
    }, [searchQuery]);

    return (
        <div className="relative w-full h-96 flex flex-col items-center justify-center bg-[#1E1E1E] text-gray-400 font-sans rounded-lg border border-[#3c3c3c] mt-4">
            <h1 className="text-2xl text-white">Configuración de Tema</h1>
            <p className="mt-2">El tema actual es: <span className="text-[#569CD6] font-semibold">{themes.find(t => t.id === activeTheme)?.name}</span></p>
            <div className="mt-4 p-2 border border-dashed border-gray-600 rounded-md">
                Presiona <kbd className="px-2 py-1 text-sm font-semibold text-gray-300 bg-gray-700 rounded-md">Ctrl + K</kbd> para abrir la paleta de temas.
            </div>

            {isOpen && (
                <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center pt-20 z-10" onClick={closePalette}>
                    <div className="w-full max-w-lg bg-[#252526] rounded-lg shadow-2xl border border-[#3c3c3c] overflow-hidden" onClick={e => e.stopPropagation()}>
                        <input
                            type="text"
                            placeholder='Busca un tema...'
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="w-full p-4 bg-[#252526] text-white text-lg outline-none border-b border-[#3c3c3c]"
                            autoFocus
                        />
                        <ul className="max-h-80 overflow-y-auto">
                            {filteredThemes.length > 0 ? filteredThemes.map((theme, index) => (
                                <li
                                    key={theme.id}
                                    onClick={() => handleActivate(theme.id)}
                                    className={`p-4 flex items-center justify-between cursor-pointer ${index === activeIndex ? 'bg-[#04395E]' : 'hover:bg-[#37373D]'}`}>
                                    <div>
                                        <h4 className={`font-semibold text-sm ${index === activeIndex ? 'text-white' : 'text-gray-300'}`}>{theme.name}</h4>
                                        <p className={`text-xs mt-1 ${index === activeIndex ? 'text-gray-300' : 'text-gray-500'}`}>{theme.description}</p>
                                    </div>
                                    {activeTheme === theme.id && <span className="text-xs text-green-400">Active</span>}
                                </li>
                            )) : (
                                <li className="p-4 text-center text-gray-500">No se encontraron temas.</li>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
