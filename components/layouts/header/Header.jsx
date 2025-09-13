"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 sm:p-2 bg-whitesmoke border-b-2 border-b-[#bebebec5] z-50 shadow-md">
      {/* Logo a la izquierda */}
      <Link href="/" className="flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110">
        <img src="/images/img/logo-artthea.png" alt="Logo ARTTHÉA" className="h-10 w-auto" />
      </Link>

      {/* Menú al centro */}
      <nav className="nav md:flex md:items-center md:gap-10 hidden">
        <Link href="/galeria" className="text-decoration-none text-[#333] text-xl relative py-1 transition-colors duration-300 overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-[-100%] after:w-full after:h-0.5 after:bg-[#9c7905] after:transition-transform after:duration-300 after:ease-in-out hover:text-[#9c7905] hover:after:translate-x-full">Galería de arte</Link>
        <Link href="/sobre-nosotros" className="text-decoration-none text-[#333] text-xl relative py-1 transition-colors duration-300 overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-[-100%] after:w-full after:h-0.5 after:bg-[#9c7905] after:transition-transform after:duration-300 after:ease-in-out hover:text-[#9c7905] hover:after:translate-x-full">Sobre nosotros</Link>
        <Link href="#soporte" className="text-decoration-none text-[#333] text-xl relative py-1 transition-colors duration-300 overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-[-100%] after:w-full after:h-0.5 after:bg-[#9c7905] after:transition-transform after:duration-300 after:ease-in-out hover:text-[#9c7905] hover:after:translate-x-full">Soporte</Link>
        <Link href="/membresias" className="text-decoration-none text-[#333] text-xl relative py-1 transition-colors duration-300 overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-[-100%] after:w-full after:h-0.5 after:bg-[#9c7905] after:transition-transform after:duration-300 after:ease-in-out hover:text-[#9c7905] hover:after:translate-x-full">Membresía</Link>
      </nav>

      {/* Botones a la derecha */}
      <div className="flex items-center gap-3">
        <Link href="/registro">
          <button className="text-black px-4 py-2 border-none cursor-pointer font-semibold text-lg transition-colors duration-300 hover:text-[#9c7905]">
            Registrarse
          </button>
        </Link>
        <Link href="/login">
          <button className="bg-[#d8c40c] text-white px-4 py-2 border-none rounded-2xl cursor-pointer font-semibold text-lg transition-colors duration-300 hover:bg-[#9c7905]">
            Iniciar sesión
          </button>
        </Link>
      </div>

      {/* Menú para móviles */}
      <div className="md:hidden flex flex-col cursor-pointer gap-1.5" onClick={toggleMenu}>
        <div className="w-6 h-1 bg-[#333] rounded-sm"></div>
        <div className="w-6 h-1 bg-[#333] rounded-sm"></div>
        <div className="w-6 h-1 bg-[#333] rounded-sm"></div>
      </div>

      {menuOpen && (
        <nav className="md:hidden absolute top-16 right-4 bg-whitesmoke border border-[#bebebec5] rounded-lg shadow-lg p-4 flex flex-col gap-4 w-48 z-50">
          <Link href="/galeria" className="text-[#333] text-lg hover:text-[#9c7905]">Galería de arte</Link>
          <Link href="/sobre-nosotros" className="text-[#333] text-lg hover:text-[#9c7905]">Sobre nosotros</Link>
          <Link href="#soporte" className="text-[#333] text-lg hover:text-[#9c7905]">Soporte</Link>
          <Link href="/membresias" className="text-[#333] text-lg hover:text-[#9c7905]">Membresía</Link>
          <Link href="/registro" className="text-[#333] text-lg hover:text-[#9c7905]">Registrarse</Link>
          <Link href="/login" className="text-[#333] text-lg hover:text-[#9c7905]">Iniciar sesión</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;