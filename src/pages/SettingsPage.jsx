import { useState } from 'react';
import { themes } from '../data/themes';

// Placeholder for a context function to change the theme
// const { setCurrentTheme } = usePortfolioContext();

export default function SettingsPage() {
    // This would come from context in a real implementation
    const [activeTheme, setActiveTheme] = useState('vscode-dark');

    const handleActivateTheme = (themeId) => {
        console.log(`Activating theme: ${themeId}`);
        // In a real app, you'd call the context function here:
        // setCurrentTheme(themeId);
        setActiveTheme(themeId);
    };

    return (
        <div className="flex h-full bg-[#1E1E1E] text-[#D4D4D4] font-sans rounded-lg overflow-hidden border border-[#3c3c3c] mt-4">
            {/* Sidebar Navigation */}
            <aside className="w-64 bg-[#252526] p-4 border-r border-[#3c3c3c]">
                <h2 className="text-xs text-gray-400 uppercase font-bold mb-4">Workbench</h2>
                <ul>
                    <li className="pl-4">
                        <a href="#" className="block py-1 px-2 text-sm rounded bg-[#37373D] text-white border-l-2 border-[#007ACC]">
                            Appearance
                        </a>
                    </li>
                    {/* Add other settings categories here if needed */}
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <h1 className="text-2xl font-light mb-2">Appearance</h1>
                <p className="text-sm text-gray-400 mb-8">Settings related to the visual appearance of the portfolio.</p>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg">Portfolio Color Theme</h3>
                        <p className="text-xs text-gray-500 mt-1">Specifies the color theme used in the portfolio. This will reload the entire experience.</p>
                    </div>

                    <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg divide-y divide-[#3c3c3c]">
                        {themes.map(theme => (
                            <div key={theme.id} className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-10 rounded-md flex overflow-hidden border border-[#3c3c3c]">
                                        {theme.colors.map((color, i) => (
                                            <div key={i} style={{ backgroundColor: color }} className="flex-1 h-full"></div>
                                        ))}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm">{theme.name}</h4>
                                        <p className="text-xs text-gray-400 mt-1">{theme.description}</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => handleActivateTheme(theme.id)}
                                    disabled={activeTheme === theme.id}
                                    className={`text-sm px-4 py-1.5 rounded-md transition-colors font-semibold ` +
                                        `${activeTheme === theme.id 
                                            ? 'bg-[#33373A] text-gray-500 cursor-not-allowed' 
                                            : 'bg-[#0E639C] text-white hover:bg-[#1177BB]'}`
                                    }
                                >
                                    {activeTheme === theme.id ? 'Active' : 'Activate'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
