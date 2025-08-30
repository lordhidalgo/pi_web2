import React from "react";

const Footer = () => (
  <footer className="bg-[#f7f7f7] p-6 sm:p-8 mt-8 text-base text-[#222] border-t border-[#e0e0e0]">
    <div className="flex flex-wrap justify-between items-start gap-8">
      <div>
        <strong className="text-xl">ARTTHÉAcomunity</strong>
        <div className="text-sm sm:text-base text-[#555] mt-1">Una comunidad global de artistas</div>
      </div>
      <nav className="flex flex-wrap gap-4 sm:gap-6 items-center">
        <a href="#" className="text-[#222] no-underline text-sm sm:text-base transition-colors duration-200 hover:text-[#9c7905]">Escríbenos</a>
        <a href="#" className="text-[#222] no-underline text-sm sm:text-base transition-colors duration-200 hover:text-[#9c7905]">Normas de la Comunidad</a>
        <a href="#" className="text-[#222] no-underline text-sm sm:text-base transition-colors duration-200 hover:text-[#9c7905]">Términos de Servicio</a>
        <a href="#" className="text-[#222] no-underline text-sm sm:text-base transition-colors duration-200 hover:text-[#9c7905]">Política de Privacidad</a>
        <a href="#" className="text-[#222] no-underline text-sm sm:text-base transition-colors duration-200 hover:text-[#9c7905]">Política de Devolución</a>
      </nav>
      <div className="flex gap-4 items-center mt-2 sm:mt-0">
        <a href="#" aria-label="Facebook" className="text-[#222] no-underline text-sm sm:text-base transition-colors duration-200 hover:text-[#9c7905]">Facebook</a>
        <a href="#" aria-label="Instagram" className="text-[#222] no-underline text-sm sm:text-base transition-colors duration-200 hover:text-[#9c7905]">Instagram</a>
        <a href="#" aria-label="Twitter" className="text-[#222] no-underline text-sm sm:text-base transition-colors duration-200 hover:text-[#9c7905]">Twitter</a>
      </div>
    </div>
    <div className="flex justify-between items-center mt-6 text-sm border-t border-[#e0e0e0] pt-4">
      <span>© 2025 ARTTHÉA - Todos los derechos reservados.</span>
    </div>
  </footer>
);

export default Footer;