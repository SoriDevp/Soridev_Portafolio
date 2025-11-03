import React from 'react';
import logo from './../../assets/logo/SoriDev_light.png';

function Header() {
    return (
        <header className="w-full h-12 bg-[#3c3c3c] flex items-center justify-center px-4 flex-shrink-0 ">
            {/* Puedes agregar aquí el título del archivo activo o un menú tipo "File, Edit..." */}
            <img src={logo} alt="Logo" className="h-6 mr-2" />

        </header>
    );
}

export default Header;